import React from 'react';
import './sign-up.scss';

import Button from '../button/button';
import FormInput from '../form-input/form-input';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
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
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;