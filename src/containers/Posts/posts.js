import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Post from '../../component/Post/post';


const Posts=() => {
    const [post,setPost] =useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/';
        axios.get(url + 'posts')
        .then( response =>
            {
                const posts =response.data.slice(0,10);
                
                setPost(posts);
            });
           
    }, []);

    const postsFin = post.map(ig =>{ return <Post key={ig.id} title={ig.title} body={ig.body}/> ;});
    return (
        <div className='Posts'>
         {postsFin}
        </div>);
}

export default Posts;
