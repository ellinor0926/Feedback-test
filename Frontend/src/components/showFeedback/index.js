import React from 'react';

const ShowFeedback = ({ feedback }) => {

       // const altImgSrc = 'http://www.dreams.metroeve.com/wp-content/uploads/2017/05/dreams.metroeve_grey-dreams-meaning.jpg';

    // const thumbnailStyles = {
    //     backgroundImage: `url(${u.imgSrc.length > 0 ? u.imgSrc : altImgSrc})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover'
    // }

    return(
        <div className='show-fb'>
            <div className='show-fb-header'>
                <div className='show-fb-sender'>
                    <div className='fp-thumbnail' style={thumbnailStyles}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFeedback;