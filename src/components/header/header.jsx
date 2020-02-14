import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = ({ currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options-container'>
            <Link to='/shop' className='options'>SHOP</Link>
            <Link to='/shop' className='options'>CONTACT</Link>
            {
                currentUser ? 
                <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div> : 
                <Link to='/signin' className='options'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;