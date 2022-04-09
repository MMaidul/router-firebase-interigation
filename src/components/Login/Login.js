import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <div style={{ margin: '10px'}}>
                <button
                    onClick={signInWithGoogle}
                >Google Sign in</button>
           </div>
            <form action="">
            <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;