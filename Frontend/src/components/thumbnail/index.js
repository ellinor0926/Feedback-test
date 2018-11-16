import React from 'react';

const Thumbnail = ({user, size}) => {

    const altImgSrc = require('../../img/blank-profile-picture.png');

    const thumbnailStyles = {
        backgroundImage: `url(${user.length > 0
            ? user.imgSrc
            : altImgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: '100%',
        alignSelf: 'center'
    }

    return <div style={thumbnailStyles}></div>

}

export default Thumbnail;