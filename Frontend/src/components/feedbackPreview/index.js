import React, { Component } from 'react';
import Moment from 'react-moment';

import './feedback-preview.css'


class FeedbackPreview extends Component {

    fpHeaderStyles = {
        maxWidth: '200px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
    

    clicked(id) {
        this.props.clickFeedback(id);
    }

    
    render() {
        const { feedback } = this.props;

        return(
            <button className='fp-container' onClick={() => this.clicked(feedback._id)}>
                <div className='fp-content'>
                    <div className='fp-header'>
                        <p className='fp-name' style={this.fpHeaderStyles}>
                            {feedback.sender.firstName} {feedback.sender.lastName} ({feedback.sender.location})
                        </p>
                        
                    </div>
                    <p className='fp-itemNumber'>
                        #{feedback.itemNumber}, {feedback.inputType}
                    </p>
                    <p className='fp-dateSent'>
                        <Moment format="YYYY/MM/DD HH:mm">{feedback.date}</Moment>
                    </p>
                </div>
            </button>
        )
    }
}

export default FeedbackPreview;