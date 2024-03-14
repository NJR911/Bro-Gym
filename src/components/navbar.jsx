import './navbar.css';
import 'boxicons';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <box-icon name='dumbbell' size="md" type='solid' color='#fff' /> 
                <span>Bro Gym</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>            
            <div className="user-info">
                <box-icon name='user' type='solid' size="md" color='#fff' />
                <a href="#">chihaja</a>
            </div>
        </nav>
    );
}
