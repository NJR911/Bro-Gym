import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const { user, logout } = useAuth();


  return (
    <div className="sidebar">
      <ul>
        {user?.is_admin && (
          <li>
            <NavLink exact to="/admin" activeClassName="active">Admin</NavLink>
          </li>
        )}
        <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><button onClick={logout} className='button-logout'>Logout</button></li>
      </ul>
    </div>
  );
}
