import React from 'react';

const Comments = (props) => {
    return ( 
        <div className='Comments'>
            <h3>{props.name}</h3>
            <h5>{props.email}</h5>
            <p>{props.body}</p>
        </div>
     );
}
 
export default Comments;