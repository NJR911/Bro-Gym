import './auth.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from './auth-layout';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });


    const [errorMsg, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.password_confirmation) {
            setError('Passwords do not match.');
            return;
        }
    
        try {
            await register(formData.name, formData.email, formData.password);
            navigate('/dashboard'); // Navigate to dashboard after successful registration
        } catch (error) {
            console.error('Registration error:', errorMsg);
            setError(errorMsg.message || 'Failed to register');
        }
    };
    

    return (
        <>
            <AuthLayout />
            <div className="signup-container">
                <h1>Sign up</h1>

                <div className="signup-card">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <span>Name</span>
                            <i></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <span>Email</span>
                            <i></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span>Password</span>
                            <i></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required
                            />
                            <span>Confirm Password</span>
                            <i></i>
                        </div>

                        <button type="submit">Register</button>
                        <Link className="to-login" to="/login">
                            Login
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
