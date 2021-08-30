import React from 'react';
import './Home.css';
import MemberCard from './MemberCard.js';
import Settings from '../Header/Settings.js';

const Home = ({onRouteChange, route, settings, changeSettings}) => {
    if (!settings) {
        return (
            <div className='home-container'>
                <div className='members-board'>
                    <h1 className='members-board-title'>Members Board</h1>
                    <MemberCard />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='home-container'>
                <Settings changeSettings={changeSettings} />
            </div>
        );
    }
}

export default Home;