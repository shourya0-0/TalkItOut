import React, { useState } from 'react';
import '../styles/landingpage.css';

import socialeXLogo from '../images/SocialeX.png';
import About1 from '../images/about-1.png';
import About2 from '../images/about-2.jpg';

import Login from '../components/Login';
import Register from '../components/Register';

const LandingPage = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <div className='landingPage'>
        
        <div className="landing-header">
            <span className="landing-header-logo"><h1>TalkItOut</h1></span>
            <ul>
                <li className='header-li'><a href="#home">Home</a></li>
                <li className='header-li'><a href="#about">About</a> </li>
                <li className='header-li'><a href="#home">Join now</a></li>
            </ul>
        </div>


        <div className="landing-body">

            <div className="landing-hero" id='home'>
                <div className="landing-hero-content">
                    <h1>TalkItOut</h1>
                    <p>Step into TalkItOut, the playground for the wildly imaginative, where vibrant communities thrive and eccentricities are celebrated. </p>

                    <div className="authentication-form">

                        { isLoginBox ?

                            <Login setIsLoginBox={setIsLoginBox} />
                            :
                            <Register setIsLoginBox={setIsLoginBox} />
                        }

                    </div>

                </div>


                <div className="landing-hero-image">
                    
                        <div id='landing-image-sidebar-left'></div>
                        <div className="back"></div>
                        <div id='landing-image-sidebar-right'></div>
                   
                </div>
            </div>

            


        </div>

    </div>
  )
}

export default LandingPage