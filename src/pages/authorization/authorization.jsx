import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const Authorization = () => (
    <div className='auth'>
        <div>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default Authorization;