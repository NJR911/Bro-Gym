import './section.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBuilding, faUserNinja, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Section(){

    return(
        <>
            <section className="class-container">
                <div className="class-content">
                    <h2 className="section-header">EXPERIENCE A NEW LEVEL OF FITNESS</h2>
                    <p>
                    Join our gym and become part of a supportive 
                    community dedicated to improving their health 
                    and fitness. With state-of-the-art equipment and 
                    expert trainers, we provide the resources and 
                    guidance you need to achieve your fitness goals.
                    </p>
                    <Link className="btn1" to="/schedule">TAKE A TOUR <FontAwesomeIcon className='arrow-icon' icon={ faArrowRight } /></Link>
                </div>

                <div className="class-image">
                    <span className="bg-blur"></span>
                    <img className='class-img1' src="./src/assets/Class-1.png" alt="class-img1" />
                    <img className='class-img2' src="./src/assets/Class-2.png" alt="class-img2" />
                </div>
            </section>


            <section className="section-container">
                <h2 className="section-header">WHY JOIN US</h2>
                <p className="section-superhead">
                Our diverse membership base creates a friendly and supportive
                atmosphere, where you can make friends and stay motivated.
                </p>
                <div className="join-image">
                    <div className="image-container">
                        <img src="./src/assets/join.png" alt="join" />
                    </div>
                    <div className="join-grid">
                        <div className="join-card">
                            <span><FontAwesomeIcon icon={faUserNinja} /></span>
                            <div className="join-card-content">
                                <h4>Personal Trainer</h4>
                                <p>Unlock your potential with our expert Personal Trainers.</p>
                            </div>
                        </div>

                        <div className="join-card">
                            <span><FontAwesomeIcon icon={faVideo} /></span>
                            <div className="join-card-content">
                                <h4>Practice Sessions</h4>
                                <p>Elevate your fitness with practice sessions.</p>
                            </div>
                        </div>

                        <div className="join-card">
                            <span><FontAwesomeIcon icon={faBuilding} /> </span>
                            <div className="join-card-content">
                                <h4>Best Management</h4>
                                <p>Supportive management, for your fitness success.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}