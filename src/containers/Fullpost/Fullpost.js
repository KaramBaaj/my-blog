import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Comments from './comments/comments';


const Fullpost = (props) => {
    const [fullPost,setFullPost] = useState(null);
    const [comments, setComments] = useState();
    

    useEffect(() => {
        if(props.id){
            if(!fullPost || (fullPost &&  fullPost.id !== props.id) ) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + props.id )
            .then(res => {setFullPost(res.data);})}}
    },);

    useEffect(() => {
        if(props.id){
            if(!fullPost || (fullPost &&  fullPost.id !== props.id) ) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + props.id + "/comments")
            .then(response => {setComments(response.data);})}}
    },);

    let comment= null;
    if(comments){
        comment = comments.map( igK =>{ return <Comments key={igK.id} name={igK.name} email={igK.email} body={igK.body} /> ;}); 
    }

    let post = null;
    if(fullPost) {

        post = (
        <div className='Fullpost' onClick={props.clickedFull} >
          <h1>{fullPost.title}</h1>
          <p>{fullPost.body}</p>
          <h2>Comments:</h2>
          {comment}
        </div>);
 }
        
    
    return post ;




}
 
export default Fullpost;