import React, { createContext } from 'react';
import socketIoClient from 'socket.io-client';

export const SocketContext = createContext();

const WS = process.env.REACT_APP_BACKEND_URL || 'https://talkitout.onrender.com'; // Use environment variable or fallback to deployed URL

const socket = socketIoClient(WS);

export const SocketContextProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
