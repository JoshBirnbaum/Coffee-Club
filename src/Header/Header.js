import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({onRouteChange, changeSettings, route}) => {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Coffee Club</h1>
            <div className='header-icons-container'>
                <FontAwesomeIcon icon={faHome} className='header-icon'/>
                <FontAwesomeIcon onClick={() => changeSettings(true)} icon={faCog} className='header-icon'/>
                <FontAwesomeIcon onClick={() => onRouteChange('')} icon={faSignOutAlt} className='header-icon'/>
            </div>
        </div>
    );
}

export default Header;