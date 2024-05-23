import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { useAuth } from '../../context/AuthContext';


export default function Sidebar(){
  const { logout } = useAuth();


    return (

      <div className="sidebar">
        <ul>
          <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/schedule" activeClassName="active">Schedule</NavLink></li>
          <li><NavLink to="/membership" activeClassName="active">Membership</NavLink></li>
          <li><button onClick={logout} className='button-logout'>Logout</button></li>
        </ul>
      </div>
    );
  }
  
