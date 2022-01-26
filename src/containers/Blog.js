import React from 'react';
import Posts from './Posts/posts';
import { Routes, Route , Link } from 'react-router-dom';
import NewPost from './newPost/newPost';
import Users from './users/users';


const Blog = () => {

    return ( 
        <div className='container'>
            <div className='Blog'>
                <nav>
                    <ul>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/new-post'>NewPost</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/new-post' element={<NewPost/>} />
                    <Route path='/users' element={<Users/>} />
                </Routes>
            </div>
        </div>
     );
}
 
export default Blog;