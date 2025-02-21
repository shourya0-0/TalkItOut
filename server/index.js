import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'; // Import dotenv

import authRoutes from './routes/Route.js';
import SocketHandler from './SocketHandler.js';

// Config
dotenv.config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('', authRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

io.on("connection", (socket) => {
  console.log("User connected");
  SocketHandler(socket);
});
console.log('MongoDB URI:', process.env.MONGO_URI);
// Mongoose setup
const PORT = process.env.PORT || 6001; // Use environment variable for port
const MONGO_URI = process.env.MONGO_URI; // Use environment variable for MongoDB URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  server.listen(PORT, () => {
    console.log(`Running @ ${PORT}`);
  });
}).catch((e) => console.log(`Error in db connection ${e}`));
