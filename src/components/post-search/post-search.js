import React, { Component } from 'react';

import './post-search.css';

export default class PostSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value.toLowerCase();
        console.log(term);
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Search..."
                onChange={this.onUpdateSearch}
            />
        )
    }
}
