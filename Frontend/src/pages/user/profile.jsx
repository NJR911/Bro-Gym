import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Layouts/sidebar';
import './dashboard.css';

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Profile</h1>
                <div className="user-info">
                    <p>Name: {user?.name}</p>
                    <p>Email: {user?.email}</p>
                </div>
                <div className="profile-details">
                    <h2>User Details</h2>
                    <ul>
                        <li>Username: {user?.username}</li>
ç                        {/* You can include more user details here */}
                    </ul>
                </div>
                <div className="profile-actions">
                    {/* You can include profile editing options here */}
                    <button>Edit Profile</button>
                    <button>Change Password</button>
                </div>
            </div>
        </div>
    );
}
