import React, { useState, useEffect } from 'react';

import axios from 'axios';


const Fullpost = (props) => {
    const [fullPost,setFullPost] = useState(null);
    

    useEffect(() => {
        if(props.id){
            if(!fullPost || (fullPost &&  fullPost.id !== props.id) ) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + props.id )
            .then(res => {setFullPost(res.data);})}}
    },);

    let post = null;
    if(fullPost) {
        post = (
        <div className='Fullpost' onClick={props.clickedFull} >
          <h1>{fullPost.title}</h1>
          <p>{fullPost.body}</p>
        </div>);}
    
    return post ;




}
 
export default Fullpost;