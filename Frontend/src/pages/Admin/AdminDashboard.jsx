import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Sidebar from '../../components/Layouts/sidebar';
import axios from 'axios';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else if (!user.is_admin) {
            navigate('/dashboard');
        } else {
            fetchUsers();
        }
    }, [user, navigate]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:8000/api/admin/users');
            
            const filteredUsers = response.data.users.filter(u => !u.is_admin);
            setUsers(filteredUsers || []); 
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="admin-content">
                <h1>Admin Dashboard</h1>
                <h2>Users and Memberships</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : users.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Membership Type</th>
                                <th>Price</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className={user.memberships.length > 0 ? 'has-memberships' : ''}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {user.memberships.length > 0 ? (
                                        user.memberships.map(membership => (
                                            <React.Fragment key={membership.id}>
                                                <td>{membership.type}</td>
                                                <td>${membership.price}</td>
                                                <td>{membership.start_date}</td>
                                                <td>{membership.end_date}</td>
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <>
                                            <td colSpan="4">No Memberships</td>
                                        </>
                                    )}
                                    <td><button>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No users or memberships available.</p>
                )}
            </div>
        </div>
    );
}
