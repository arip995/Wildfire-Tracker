import React from 'react';
import {Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
    return (
        <header className="header">
            <h1>
                <Icon className="icon" icon={locationIcon}/>
                Wildfire Tracker (Powered by NASA)</h1>
        </header >
    )
}

export default Header
