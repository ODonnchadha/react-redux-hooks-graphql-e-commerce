import React from 'react';
import './sign-up.scss';
import { auth, createUserProfileDocument } from '../../firebase';
import Button from '../button/button';
import FormInput from '../form-input/form-input';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.warn(error);
        }

        this.setState({ email: '', password: ''});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.onSubmit}>
                    <FormInput
                        label='Display Name'
                        name='displayName' 
                        type='text' 
                        value={displayName} 
                        required 
                        onChange={this.onChange}
                    />
                    <FormInput
                        label='Email'
                        name='email' 
                        type='email' 
                        value={email} 
                        required 
                        onChange={this.onChange}
                    />
                    <FormInput
                        label='Password'
                        name='password' 
                        type='password' 
                        value={password} 
                        required 
                        onChange={this.onChange} 
                    />
                    <FormInput
                        label='Confirm Password'
                        name='confirmPassword'
                        type='password' 
                        value={confirmPassword} 
                        required 
                        onChange={this.onChange} 
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;