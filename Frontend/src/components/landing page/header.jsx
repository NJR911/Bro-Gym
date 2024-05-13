import './header.css'
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <>
            <div className="header">
                <div className="left-box">
                    <img src="./src/assets/header-pic.png" alt="" />
                </div>
                <div className="right-box">
                    <h1>BECOMING <span>STRONGER</span></h1>
                    <p>IS YOUR <span>CHOICE</span></p>
                    
                    <div className="btns">
                        <Link to="/signup" className='join-btn'>JOIN HERE</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
