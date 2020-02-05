import React from 'react';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase';
import Button from '../button/button';
import FormInput from '../form-input/form-input';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.onSubmit}>
                    <FormInput
                        label='Email'
                        name='email' 
                        type='email' 
                        value={this.state.password} 
                        required 
                        onChange={this.onChange}
                    />
                    <FormInput
                        label='Password'
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        onChange={this.onChange} 
                    />
                    <Button type='submit'>Sign In</Button>
                    <Button onClick={signInWithGoogle}>Sign In With Google</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;