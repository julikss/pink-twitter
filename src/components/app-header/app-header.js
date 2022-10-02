import React from 'react';

import './app-header.css';


const AppHeader = ({numOfPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>USERNAME</h1>
            <h2>{numOfPosts} tweets, liked 0</h2>
        </div>
    )
}

export default AppHeader;