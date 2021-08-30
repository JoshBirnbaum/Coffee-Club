import React from 'react';
import './MemberCard.css';

const MemberCard = () => {
    return (
        <div className='mc-container'>
            <div className='mc-header'>
                <p className='member-name'>Josh</p>
            </div>
            <p className='member-type'>Local Coffee Shop Hippie</p>
            <p className='member-drink'>Black Light Roast Coffee</p>
            <p className='member-message'>This is some sample text, probably not too much, the message isn't intended to be an essay.</p>
        </div>
    );
}

export default MemberCard;