import React from 'react';
import Thumbnail from '../thumbnail';
import Moment from 'react-moment';

import './message-header.css';

const MessageHeader = ({sender, date}) => {
    return (
        <div className='mh-wrapper'>
            <div className='mh-sender'>
                <Thumbnail user={sender} size={50}/>

                <div className='mh-sender-details'>
                    <p className='mh-sender-name'>{sender.firstName} {sender.lastName}</p>
                    <p className='mh-sender-role'>{sender.role}</p>
                    <p className='mh-sender-location'>at {sender.location}</p>
                </div>
            </div>

            <div className='mh-date'>
                <Moment format="YYYY/MM/DD HH:mm">{date}</Moment>
            </div>

        </div>
    )
}

export default MessageHeader;