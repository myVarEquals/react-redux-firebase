import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={this.inputChangeHandler} type="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={this.inputChangeHandler} type="password" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">First Name</label>
                        <input name="firstName" onChange={this.inputChangeHandler} type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Last Name</label>
                        <input name="lastName" onChange={this.inputChangeHandler} type="text" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
  }
}

export default SignUp
