import React, { Component } from 'react';
import AppHeader from '../app-header';
import PostAdd from '../post-add';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.addPost = this.addPost.bind(this);
        this.countId = 0;
    };

    //all actions with tweets 
    addPost(text) {
        const newPost = {
            label: text,
            id: this.countId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newPost];
            return {
                data: newArray
            }
        })
    }

    render() {
        const { data } = this.state;
        const numOfPosts = data.length;
        
        return (
            <div className="app">
                <AppHeader numOfPosts={numOfPosts}/>
                <PostAdd onAddPost={this.addPost}/>
            </div>
            
        )
    }
}