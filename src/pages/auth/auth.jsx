import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const Auth = () => (
    <div className='auth'>
        <SignIn />
        <SignUp />
    </div>
)

export default Auth;