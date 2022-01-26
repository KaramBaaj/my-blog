import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewPost = () => {

    const[newPost, setNewPost]= useState({
        title:"" ,
        content: "",
    });

    const navigate = useNavigate();

    const postButtonHandler = () =>{
        const post ={
         title: newPost.title,
         body: newPost.content
        };

     axios.post('https://jsonplaceholder.typicode.com/posts', post).then(res =>{ return res});


        navigate('/');
    
}
    return ( 
    <div className='NewPost'>
        <h1>Add A New Post</h1>
        <label>Title:</label>
        <input value={newPost.title}  onChange={(e) => setNewPost({...newPost,title: e.target.value})} />
        <label>Content:</label>
        <textarea rows="4" value={newPost.content}  onChange={(e) => setNewPost({...newPost,content:e.target.value})} />
        <button onClick={postButtonHandler}>Add Post</button>
 

    </div> );
}
 
export default NewPost;