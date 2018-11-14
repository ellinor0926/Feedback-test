import React from 'react';

const ShowFeedback = ({ feedback }) => {

       const altImgSrc = 'http://www.dreams.metroeve.com/wp-content/uploads/2017/05/dreams.metroeve_grey-dreams-meaning.jpg';

    const thumbnailStyles = {
        backgroundImage: `url(${feedback.sender.imgSrc.length > 0 ? feedback.sender.imgSrc : altImgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        alignSelf: 'center'
    }
    
    return(
        <div className='show-fb'>
            <div className='show-fb-header'>
                <div className='show-fb-productInfo'>
                    {feedback.itemNumber}, {feedback.itemName}
                </div>
                <div className='show-fb-sender'>
                    <div className='fb-thumbnail' style={thumbnailStyles}>
                    </div>
                    <div>
                        <p>{feedback.sender.firstName} {feedback.sender.lastName}</p>
                        <p>{feedback.sender.role}</p>
                        <p>at {feedback.sender.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFeedback;