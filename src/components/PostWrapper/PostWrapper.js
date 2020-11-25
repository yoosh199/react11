import React from 'react';
import './PostWrapper.css'

const PostWrapper = (props) => {
    return (
        <div className="PostWrapper">
            {props.children}
            {props.info}
        </div>
    );
};

export default PostWrapper;