import React from 'react';
import './authorization.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const Authorization = () => (
    <div className='sign-in-and-sign-up'>
        <div>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default Authorization;