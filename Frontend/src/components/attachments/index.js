import React from 'react';

const Attachments = ({ list }) => {

    return(
        <ul>
            {list.map(file => {
                return <li>{file.src}</li>
            })}
        </ul>
    )
}

export default Attachments;