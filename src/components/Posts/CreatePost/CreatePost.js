import React, { Component } from 'react'

class CreatePost extends Component {

    state = {
        title: '',
        content: ''
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
  
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input name="title" onChange={this.inputChangeHandler} type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Type here!</label>
                        <textarea name="content" onChange={this.inputChangeHandler} cols="30" rows="10" className="materialize-textarea"></textarea>
                    </div>                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
  }
}

export default CreatePost
