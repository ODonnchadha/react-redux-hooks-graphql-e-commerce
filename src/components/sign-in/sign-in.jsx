import React from 'react';
import './sign-in.scss';
import { signInWithGoogle, auth } from '../../firebase';
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

    onSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.warn(error);
        }
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
                        value={this.state.email} 
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
                    <div className='buttons'>
                        <Button type='submit'>Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;