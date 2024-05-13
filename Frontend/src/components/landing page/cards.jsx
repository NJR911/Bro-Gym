import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBasketShopping, faHeartPulse, faHorseHead, faPersonRunning } from '@fortawesome/free-solid-svg-icons'


export default function Cards(){

    return(
        <>
            <section className="cards-container">
                {/* <hr /> */}
                <div className="explore_header">
                    <h2 className="card_header">EXPLORE OUR PROGRAM</h2>
                </div>

                <div className="explore-grid">
                    <div className="explore-card">
                        <span><FontAwesomeIcon icon={faHorseHead} /></span>
                        <h4>Strength</h4>
                        <p>
                            Embrace the essence of strength as we delve into its various
                            dimensions phyical, mental, and emotional
                        </p>
                        <a href="">Join Now <FontAwesomeIcon className='arrow-right-icon' icon={faArrowRight} /></a>
                    </div>

                    <div className="explore-card">
                        <span><FontAwesomeIcon icon={faHeartPulse} /> </span>
                        <h4>Physical Fitness</h4>
                        <p>
                            It encompasses a range of activities that improve health, strength,
                            flexibility, and overall well-being.
                        </p>
                        <a href="">Join Now <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>

                    <div className="explore-card">
                        <span><FontAwesomeIcon icon={faPersonRunning} /></span>
                        <h4>Fat Lose</h4>
                        <p>
                            Through a combination of workout routines and expert guidance, we will
                            empower you to reach your goals.    
                        </p>
                        <a href="">Join Now <FontAwesomeIcon className='arrow-right-icon' icon={faArrowRight} /></a>
                    </div>

                    <div className="explore-card">
                        <span><FontAwesomeIcon icon={faBasketShopping} /></span>
                        <h4>Weight Gain</h4>
                        <p>
                            Designed for individuals, our program offers an effective approach
                            to gaining weight in a sustainable manner.
                        </p>
                        <a href="">Join Now <FontAwesomeIcon className='arrow-right-icon' icon={faArrowRight} /></a>
                    </div>
                </div>
            </section>
        </>
    )
}