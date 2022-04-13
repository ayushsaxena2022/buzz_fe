import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots, FaShareAlt } from 'react-icons/fa';
const comments = () => {
    return (

        <div className="show_comments">
            <span className="reaction">
                <FaRegThumbsUp /> <span classname="show-text">Like</span>
            </span>
            <span className="reaction">
                <FaRegThumbsDown /> <span classname="show-text">Dislike</span>
            </span>
            <input type="text" className="show-text" placeholder="comment" />
            <span className="reaction">
                <FaRegCommentDots /> <span classname="show-text">Comments</span>
            </span>
            <span className="reaction">
                <FaShareAlt /> <span classname="show-text">Share</span>
            </span>
            ) )
        </div>
    );
}
export default comments;
