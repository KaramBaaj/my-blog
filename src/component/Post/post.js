import React from 'react';

const post = (props) => {
    return ( 
        <div className='post' onClick={props.clicked}>
            <h1>{props.title}</h1>

        </div>
     );
}
 
export default post;