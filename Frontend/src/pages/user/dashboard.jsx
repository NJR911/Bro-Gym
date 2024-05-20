import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Layouts/sidebar';
import './dashboard.css';

export default function Dashboard() {
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
                <h1>Dashboard</h1>
                <div className="user-info">
                    <p>Name: {user?.name}</p>
                    <p>Email: {user?.email}</p>
                </div>
                <div className="dashboard-sections">
                    <div className="section">
                        <h2>Recent Activity</h2>
                        <p>Details of recent activity will go here...</p>
                    </div>
                    <div className="section">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/schedule">View Schedule</a></li>
                            <li><a href="/classes">Book a Class</a></li>
                            <li><a href="/contact">Contact Support</a></li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Notifications</h2>
                        <p>You have no new notifications.</p>
                    </div>
                    <div className="section">
                        <h2>Stats and Metrics</h2>
                        <p>Details of user-specific metrics will go here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
