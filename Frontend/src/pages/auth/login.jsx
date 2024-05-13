import './auth.css'
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from './auth-layout';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        login(email, password);
    };

    // if (user) {
    //     return <Redirect to="/dashboard" />;
    // }

    return (
        <>
        <AuthLayout />

        <div className="login-container">
            <h1>Login</h1>
            <div className="login-card">
                <form onSubmit={handleSubmit}>

                    <div className="input-box">
                        <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} required />
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className="input-box">
                        <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} required />
                        <span>Password</span>
                        <i></i>
                    </div>

                        <button type="submit"> Login </button>
                        <Link className='to-signup' to="/signup"> Sign up </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
