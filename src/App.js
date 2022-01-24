import React  from 'react';
import Blog from './containers/Blog';
import {BrowserRouter} from 'react-router-dom'





function app() {
  return (
    <BrowserRouter>    
      <div>
        <Blog />
      </div> 
    </BrowserRouter>

    );
}

export default app;
