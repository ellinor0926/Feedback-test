import React from 'react';
import FeedbackPreview from '../feedbackPreview';
import ShowFeedback from '../showFeedback';

const FeedbackList = ({ filtered, feedback, users }) => {  

    const handleClickedFeedback = () => {
        
    }
    return(
        <div className='fb-wrapper'>
            <div className='fb-list'>
                {filtered.length > 0 ? (
                    filtered.map((item, i) => {
                        return <FeedbackPreview feedback={item} user={users} key={i} />
                    })
                )
                : 
                (
                    feedback.map((item, i) => {
                        return <FeedbackPreview feedback={item} user={users} key={i} />
                    })
                )}
            </div>

            <ShowFeedback />
        </div>

    )
}


export default FeedbackList;