import React, { Component } from 'react';
import Notifications from './Notifications/Notifications';
import PostList from '../Posts/PostList/PostList';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
    render() {
        
        const { posts } = this.props;

        console.log(posts);
        console.log(this.props.posts);

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={posts}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        posts: state.firestoreReducer.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts'}
    ])
)(Dashboard);