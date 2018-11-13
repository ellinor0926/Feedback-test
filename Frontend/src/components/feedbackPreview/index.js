import React from 'react';
import Moment from 'react-moment';
import './feedback-preview.css'

const FeedbackPreview = ({ feedback }) => {

    // const u = user.find(u => {
    //     return u._id === feedback.sender
    // })
    
    // const altImgSrc = 'http://www.dreams.metroeve.com/wp-content/uploads/2017/05/dreams.metroeve_grey-dreams-meaning.jpg';

    // const thumbnailStyles = {
    //     backgroundImage: `url(${u.imgSrc.length > 0 ? u.imgSrc : altImgSrc})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover'
    // }

    const fpHeaderStyles = {
        maxWidth: '220px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }



    return(
        <div className='fp-container'>
                {/* <div className='fp-thumbnail' style={thumbnailStyles}>
                </div> */}
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