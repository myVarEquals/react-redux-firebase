import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const postDetail = props => {

    const { post } = props;
    console.log(post);

    if (post) {
        return (
            <div className="container section post-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Post Title - {post.title}</span>
                        <p>{post.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                        <div>{post.timestamp}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container section post-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Loading title...</span>
                        <p>Loading content...</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by some person</div>
                        <div>A while ago</div>
                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const posts = state.firestoreReducer.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(postDetail)
