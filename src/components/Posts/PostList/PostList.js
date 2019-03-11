import React from 'react';
import PostSummary from '../PostSummary/PostSummary';

const postList = ({posts}) => {

    return (
        <div className="post-list section">
            {posts && posts.map(post => { // prevents error when no posts
                return (
                    <PostSummary post={post} key={post.id}/>
                )
            })}
        </div>
    );
}

export default postList;