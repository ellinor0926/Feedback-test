import React, { Component } from 'react';
import Message from './message.js';

class Conversation extends Component {
    
    render() {
        const { conversation } = this.props;
        return (
            <div>
               {conversation.map(message => <Message message={message} />)}
            </div>
        )
    }
}

export default Conversation;