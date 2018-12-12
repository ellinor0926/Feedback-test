import React from 'react';
import FeedbackPreview from '../feedbackPreview';
import './feedbackList.css';

const FeedbackList = ({ filtered, feedback, active, returnId }) => {  

    const handleClickedFeedback = (id) => {
        returnId(id) 
    }


    return(
        <div className='fb-wrapper'>
            <div className='fb-list'>
                {active ? (
                    filtered.map((item, i) => {
                        return <FeedbackPreview feedback={item} key={i} clickFeedback={handleClickedFeedback} />
                    })
                )
                : 
                (
                    feedback.map((item, i) => {
                        return <FeedbackPreview feedback={item} key={i} clickFeedback={handleClickedFeedback} />
                    })
                )}
            </div>

        </div>

    )
}


export default FeedbackList;