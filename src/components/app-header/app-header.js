import React from 'react';

import './app-header.css';


const AppHeader = ({numOfPosts, liked}) => {
    return (
        <div className="app-header d-flex">
            <h2>{numOfPosts} tweets, liked {liked}</h2>
        </div>
    )
}

export default AppHeader;