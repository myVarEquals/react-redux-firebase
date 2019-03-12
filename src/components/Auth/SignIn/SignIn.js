import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/authActions';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
  
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={this.inputChangeHandler} type="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={this.inputChangeHandler} type="password" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
