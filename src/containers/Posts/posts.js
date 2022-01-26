import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Post from '../../component/Post/post';
import Fullpost from '../Fullpost/Fullpost';


const Posts=() => {
    const [post,setPost] =useState([]);
    const [idNum,setIdNum] = useState(null);
    const [isClicked,setIsClicked] = useState(false);


    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/';
        axios.get(url + 'posts')
        .then( response =>
            {
                const p=response.data.slice(0,24);
                setPost(p);
            });
         
           
    }, [] );

    const clickPostHandler =(id) =>{
        setIdNum(id);
        setIsClicked(true);
    }

    const clickedFullPostHandler = () => {
        setIsClicked(false);
        setIdNum(null);
    }

    const postsFin = post.map(ig =>{ return <Post key={ig.id} title={ig.title} clicked={() => clickPostHandler(ig.id)} /> ;});
    return (
        <div className='Posts' >
           {isClicked ? <Fullpost id={idNum} clickedFull={clickedFullPostHandler} /> : postsFin }
           
        </div>);
}

export default Posts;
