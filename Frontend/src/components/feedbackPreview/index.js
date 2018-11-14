import React from 'react';
import Moment from 'react-moment';
import './feedback-preview.css'

const FeedbackPreview = ({ feedback, clickFeedback }) => {

    const fpHeaderStyles = {
        maxWidth: '220px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }




    return(
        <div className='fp-container' onClick={() => clickFeedback(feedback._id)} >
            <div className='fp-content'>
                <div className='fp-header'>
                    <p className='fp-name' style={fpHeaderStyles}>
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
        </div>
    )
}

export default FeedbackPreview;