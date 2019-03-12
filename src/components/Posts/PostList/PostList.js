import React from 'react';
import PostSummary from '../PostSummary/PostSummary';
import { Link } from 'react-router-dom';

const postList = ({posts}) => {

    return (
        <div className="post-list section">
            {posts && posts.map(post => { // prevents error when no posts
                return (
                    <Link to={'/post/' + post.id} key={post.id}>
                        <PostSummary post={post} />
                    </Link>
                )
            })}
        </div>
    );
}

export default postList;