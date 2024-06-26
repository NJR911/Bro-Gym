import './auth.css'
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from './auth-layout';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        login(email, password);
    };

    const navigate = useNavigate()
    const { user } = useAuth();
    
    useEffect(()=>{
        if(user?.is_admin){
            navigate('/admin')
        } else if(user){
            navigate('/dashboard')
        }
    }, [user, navigate])

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
