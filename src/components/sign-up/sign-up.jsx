import React from 'react';
import './sign-up.scss';

import Button from '../button/button';
import FormInput from '../form-input/form-input';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
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

    onSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form>
                    <FormInput
                        label='Display Name'
                        name='displayName' 
                        type='text' 
                        value={this.state.displayName} 
                        required 
                        onChange={this.onChange}
                    />
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
                    <FormInput
                        label='Confirm Password'
                        name='confirmPassword'
                        type='password' 
                        value={this.state.confirmPassword} 
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