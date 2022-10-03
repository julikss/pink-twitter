import React, { Component } from 'react';

import './post-item.css';

export default class PostItem extends Component {
    render() {
        const { label, onDelete, onImportant, onLiked, star, like } = this.props;
        let classNames = "post-item d-flex justify-content-between";
        if (star) classNames += ' star';
        if (like) classNames += ' like';

        return (
            <div className={classNames}>
                <span 
                    className="post-item-label"
                    onClick={onLiked}>
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}