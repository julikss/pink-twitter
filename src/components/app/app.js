import React, { Component } from 'react';
import AppHeader from '../app-header';
import PostAdd from '../post-add';
import PostList from '../post-list';
import PostSearch from '../post-search';
import PostFilter from '../post-filter';
import NavHeader from '../navbar';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            term: '',
            filter: 'all'
        }
        this.addPost = this.addPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilter = this.onFilter.bind(this);

        this.countId = 0;
    };

    //all actions with tweets 
    addPost(text) {
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

    searchPost(items, term) {
        if (term.length === 0) return items;

        return items.filter(item => {
            let text = item.label.toLowerCase();
            return text.indexOf(term) > -1;
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else if (filter === 'star') {
            return items.filter(item => item.star);
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term });
    }

    onFilter(filter) {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const numOfPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <NavHeader />
                <AppHeader 
                    liked={liked}
                    numOfPosts={numOfPosts}/>
                <div className="search-panel d-flex">
                    <PostSearch onUpdateSearch={this.onUpdateSearch} />
                    <PostFilter filter={filter} onFilter={this.onFilter}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onImportant={this.onImportant}
                    onLiked={this.onLiked}
                />
                <PostAdd onAddPost={this.addPost}/>                
            </div>
        )
    }
}