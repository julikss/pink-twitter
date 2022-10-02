import React, { Component } from 'react';

import './post-add.css';

export default class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChange(e) {
        this.setState({ msg: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAddPost(this.state.msg);
        this.setState({ msg: '' });     
    }

    render() {
        return (
            <form
                className="form-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Place for your thoughts..."
                    className="form-control new-post"
                    onChange={this.onTextChange}
                    value={this.state.msg}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}