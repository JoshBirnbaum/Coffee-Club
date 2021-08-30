import React from 'react';
import './Settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Settings = ({onRouteChange, route, changeSettings}) => {
    return (
        <div className='settings-container'>
            <div className='settings-title'>
                <h1 className='settings'>Settings</h1>
                <FontAwesomeIcon onClick={() => changeSettings(false)} className='fa-times' icon={faTimes} />
            </div>
            <div className='settings-input-container'>
                <div className='settings-name-container'>
                    <h3 className='settings-name'>Name</h3>
                    <input className='settings-name-input'></input>
                </div>
                <div className='settings-type-container'>
                    <h3 className='settings-type'>Whats your type?</h3>
                    <select className='settings-type-select'>
                        <option value='Starbucks Enthusiast'>Starbucks Enthusiast</option>
                        <option value='Local Shop Hippie'>Local Shop Hippie</option>
                        <option value='Run on Dunkin'>Run on Dunkin'</option>
                        <option value='Brewmaster'>Brewmaster</option>
                    </select>
                </div>
                <div className='settings-drink-container'>
                    <h3 className='settings-drink'>Favorite Drink</h3>
                    <input className='settings-drink-input'></input>
                </div>
                <div className='settings-message-container'>
                    <h3 className='settings-message'>A Little Message</h3>
                    <textarea className='settings-message-input'></textarea>
                </div>
                <button className='settings-submit'>Submit</button>
            </div>
        </div>
    );
}

export default Settings;