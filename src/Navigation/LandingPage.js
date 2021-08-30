import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import Signin from './Signin';
import Register from './Register.js';

const LandingPage = ({onRouteChange, route}) => {
    if (route === '') {
        return (
            <div className='lp-container'>
                <div className='lp-scene'>
                    <FontAwesomeIcon className='coffee' icon={faCoffee} />
                    <h1 className='lp-header'>Coffee Club</h1>
                </div>
                <div className='lp-start-container'>
                    <p onClick={() => onRouteChange('signin')} className='lp-start'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='lp-start'>Register</p>
                </div>
            </div>
        );
    }

    else if (route === 'signin'){
        return (
            <div className='lp-container'>
                <div className='lp-scene'>
                    <FontAwesomeIcon className='coffee' icon={faCoffee} />
                    <h1 className='lp-header'>Coffee Club</h1>
                </div>
                <div className='lp-start-container'>
                    <FontAwesomeIcon onClick={() => onRouteChange('')} className='smile' icon={faSmileBeam} />
                </div>
                <Signin onRouteChange={onRouteChange} />
            </div>
        );
    }

    else {
        return (
            <div className='lp-container'>
                <div className='lp-scene'>
                    <FontAwesomeIcon className='coffee' icon={faCoffee} />
                    <h1 className='lp-header'>Coffee Club</h1>
                </div>
                <div className='lp-start-container'>
                    <FontAwesomeIcon onClick={() => onRouteChange('')} className='smile' icon={faSmileBeam} />
                </div>
                <Register onRouteChange={onRouteChange} />
            </div>
        );
    }
}

export default LandingPage;