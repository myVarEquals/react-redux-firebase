import React from 'react';

const postSummary = ({post}) => {
    return (
        <div className="card z-depth-0 post-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by Rog</p>
                    <p className='grey-text'>11:30AM 3/9/19</p>
                </div>
        </div>
    );
}

export default postSummary;