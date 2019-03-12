import React from 'react';

const postSummary = ({post}) => {
    console.log(post);
    return (
        <div className="card z-depth-0 post-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
                    <p className='grey-text'>{post.timestamp}</p>
                </div>
        </div>
    );
}

export default postSummary;