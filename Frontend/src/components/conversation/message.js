import React from 'react';
import MessageHeader from '../messageHeader';

const Message = ({message}) => {

    return (
        <div>
            <MessageHeader sender={message.sender} date={message.date}/>
            <div>
                <p>{message.message}</p>
            </div>
        </div>
    )

}

export default Message;