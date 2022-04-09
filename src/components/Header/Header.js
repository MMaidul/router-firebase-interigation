import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/orders'}>Orders</Link>
            <Link to={'/reviews'}>Reviews</Link>
            <Link to={'/register'}>Register</Link>
            {user?.uid ? 
                'logout'
            :
            <Link to={'/login'}>Login</Link>
            }
           
        </div>
    );
};

export default Header;