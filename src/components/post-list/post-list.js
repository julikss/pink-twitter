import React from 'react';

import PostItem from '../post-item';
import { ListGroup } from 'react-bootstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onImportant, onLiked}) => {
    const items = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onImportant={() => onImportant(id)}
                    onLiked={() => onLiked(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="post-list list-group">
            {items}
        </ListGroup>
    );
}

export default PostList;