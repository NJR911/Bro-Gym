import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowRight, faCopyright, faHandFist} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faXTwitter, faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){

    return(
        <>
            <footer>
                <div className="row">
                    <div className="col">
                        
                        <h1 className='logo-ftext'><FontAwesomeIcon icon={faHandFist} /> Gym Bro</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Dicta repellat eius, quaerat hic fugiat et 
                            ipsa odit perferendis cumque quasi aperiam iure 
                            sunt excepturi officiis.
                        </p>
                    </div>

                    <div className="col">
                        <h3>Direction <div className="underline"><span></span></div></h3>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Tetouan, ipsum dolor, Morocco.</p>
                        <p className="email-id">GymBro@gym.com</p>
                        <h4>+212 654972357</h4>
                    </div>

                    <div className="col">
                        <h3>Links <div className="underline"><span></span></div></h3>
                        <ul className='footer-ul'>
                            <li className='footer-li'><a href="">Home</a></li>
                            <li className='footer-li'><a href="">Service</a></li>
                            <li className='footer-li'><a href="">About Us</a></li>
                            <li className='footer-li'><a href="">Features</a></li>
                            <li className='footer-li'><a href="">Contacts</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Newsletter <div className="underline"><span></span></div></h3>
                        <form className='footer-form' action="">
                            <FontAwesomeIcon className="envelope-icon" icon={faEnvelope} />
                            <input type="email" placeholder='Enter your email' required/>
                            <button type="submit"> <FontAwesomeIcon className="arrow-right-icon" icon={faArrowRight} /> </button>
                        </form>
                        <div className="social-icons">
                            <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="footer-icon" icon={faXTwitter} />
                            <FontAwesomeIcon className="footer-icon" icon={faWhatsapp} />
                            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
                            <FontAwesomeIcon className="footer-icon" icon={faDiscord} />
                        </div>
                    </div>
                </div>
                <hr />
                <p className='copyright'>
                    Copyright<FontAwesomeIcon className='copyright-icon' icon={faCopyright} /> 
                    2024, Not all rights Reserved
                </p>
            </footer>
        </>
    )
}
