import React from 'react';
// import { Icon } from '@iconify/react';
// import crossIcon from '@iconify/icons-gridicons/cross';

const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            {/* <div className="cross">
            <Icon icon={crossIcon} />
            </div> */}
            <h2>Event Location Info</h2>
            <ul>
                <li>ID:<strong>{info.id}</strong></li>
                <li>TITLE:<strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
