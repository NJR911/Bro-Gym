import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext';




export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav>
            <div className='logo'>
                <h1><NavLink to="/" className='logo-text' activeClassName='active'><FontAwesomeIcon icon={faHandFist} /> Bro Gym</NavLink></h1>
            </div>
            <div>
                <ul className='links'>
                    
                    {user ? (
                        <>
                            <li>
                                <NavLink to="/dashboard" className='links-text' activeClassName='active'>Dashboard</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/" exact className='links-text' activeClassName='active'>Home</NavLink>
                            </li>                        
                        </>
                    )}
                    <li>
                        <NavLink to="/about" className='links-text' activeClassName='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/schedule" className='links-text' activeClassName='active'>Schedule</NavLink>
                    </li>
                    <li>
                        <NavLink to="/membership" className='links-text' activeClassName='active'>Membership</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='links-text' activeClassName='active'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" className='links-text' activeClassName='active'>FAQ</NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className="buttons">
                <NavLink to="/login" className='button-login' activeClassName='active'>Login</NavLink>
                <NavLink to="/signup" className='button-signup' activeClassName='active'>Sign Up</NavLink>
            </div> */}
            <div className="buttons">
                {user ? (
                    <>
                        {/* <NavLink to="/dashboard" className='button-login' activeClassName='active'>Dashboard</NavLink> */}
                        <button onClick={logout} className='button-logout'>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className='button-login' activeClassName='active'>Login</NavLink>
                        <NavLink to="/signup" className='button-signup' activeClassName='active'>Sign Up</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}
