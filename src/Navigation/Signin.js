import React from 'react';
import './Signin.css';

let signinState = {
    name: '',
    email: '',
    password: ''
}

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = signinState;
    }

    formValidate = () => {
        if (this.state.name === ''){
            console.log('empty!');
        }
        else if (this.state.email === ''){
            console.log('empty!');
        }
        else if (this.state.password === ''){
            console.log('empty!');
        }
        else {
            console.log('not empty!');
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className='si-container'>
                <h1 className='si-header'>Sign In</h1>
                <h3 className='si-form-header'>First Name</h3>
                <input onChange={this.onNameChange} className='si-form-input' type='text'></input>
                <h3 className='si-form-header'>Email</h3>
                <input onChange={this.onEmailChange} className='si-form-input' type='email'></input>
                <h3 className='si-form-header'>Password</h3>
                <input onChange={this.onPasswordChange} className='si-form-input' type='password'></input>
                <button onClick={() => this.props.onRouteChange('home')} className='si-form-button'>Sign In</button>
                <div className='si-form-bottom-text-container'>
                    <p className='si-form-bottom-text'>Or</p>
                    <p onClick={() => this.props.onRouteChange('register')} className='si-form-register'>Register</p>
                </div>
            </div>
        );
    }
}

export default Signin;