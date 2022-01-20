import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Post from '../component/post';


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

    const postsFin = post.map(ig =>{ return <Post key={ig.id} title={ig.title} body={ig.body} img={ig.url} /> ;});
    return (
        <div>
         {postsFin}
        </div>);
}

export default Posts;