import React, { Component } from 'react';
import AppHeader from '../app-header';
import PostAdd from '../post-add';
import PostList from '../post-list';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.addPost = this.addPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);

        this.countId = 0;
    };

    //all actions with tweets 
    addPost(text) {
        if (text !== '') {
            const newPost = {
                label: text,
                star: false,
                id: this.countId++
            }

            this.setState(({data}) => {
                const newArr = [...data, newPost];
                return {
                    data: newArr
                }
            })
        } else {
            console.log('Error')
        }
    }

    deletePost(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    onImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            const old = data[index];
            const newItem = {...old, star: !old.star};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    onLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            
            const old = data[index];
            const newItem = {...old, like: !old.like};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state;
        const liked = data.filter(item => item.like).length;
        const numOfPosts = data.length;

        return (
            <div className="app">
                <AppHeader 
                    liked={liked}
                    numOfPosts={numOfPosts}/>
                <PostList 
                    posts={data}
                    onDelete={this.deletePost}
                    onImportant={this.onImportant}
                    onLiked={this.onLiked}
                />
                <PostAdd onAddPost={this.addPost}/>
            </div>
            
        )
    }
}