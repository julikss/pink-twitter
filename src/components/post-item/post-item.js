import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
                            <span className="star-icon"><FontAwesomeIcon icon={faStar} /></span>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <span className="trash-icon"><FontAwesomeIcon icon={faTrash} /></span>
                    </button>
                    <span className="heart-icon"><FontAwesomeIcon icon={faHeart} /></span>
                </div>
            </div>
        )
    }
}