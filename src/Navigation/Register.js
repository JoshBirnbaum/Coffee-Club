import React from 'react';
import './Register.css';

let registerState = {
    name: '',
    email: '',
    password: ''
}

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = registerState;
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
            <div className='rg-container'>
                <h1 className='rg-header'>Register</h1>
                <h3 className='rg-form-header'>First Name</h3>
                <input onChange={this.onNameChange} className='rg-form-input' type='text'></input>
                <h3 className='rg-form-header'>Email</h3>
                <input onChange={this.onEmailChange} className='rg-form-input' type='email'></input>
                <h3 className='rg-form-header'>Password</h3>
                <input onChange={this.onPasswordChange} className='rg-form-input' type='password'></input>
                <button onClick={() => this.props.onRouteChange('home')} className='rg-form-button'>Register</button>
                <div className='rg-form-bottom-text-container'>
                    <p className='rg-form-bottom-text'>Or</p>
                    <p onClick={() => this.props.onRouteChange('signin')} className='rg-form-signin'>Sign in</p>
                </div>
            </div>
        );
    }
}

export default Register;