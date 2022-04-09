import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase/firebase.init';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Login.css';



const auth = getAuth(app);

const Login = () => {
const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Login</h2>
            <div style={{ margin: '10px'}}>
                <button
                    onClick={()=>signInWithGoogle()}
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