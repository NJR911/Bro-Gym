import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './pricing.css'


export default function Pricing(){

    return(
        <>
            <div className="price-container">
                <h2 className="section-header">Our Membership Plan</h2>
                <p className="section-superheader">
                    Choose the membership plan that fits your 
                    fitness <span>Goals</span> and <span>Lifestyle</span>.
                </p>
                <div className="price-grid">
                    <div className="price-card">
                        <div className="price-card-content">
                            <h4>Basic Membership</h4>
                            <h3>$29.99/month</h3>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Access to cardio and weight training equipment
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Locker room and shower facilities
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                10% discount on personal training sessions
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Group fitness classes available for an additional fee
                            </p>
                        </div>
                        <Link className="btn-price" to="/signup">Join Now</Link>
                    </div>

                    <div className="price-card">
                        <div className="price-card-content">
                            <h4>Standard Membership</h4>
                            <h3>$49.99/month</h3>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Everything included in Basic Membership, plus:
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Unlimited access to group fitness classes
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                One complimentary personal training session per month
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Towel service
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Access to sauna facilities
                            </p>
                        </div>
                        <Link className="btn-price" to="/signup">Join Now</Link>
                    </div>

                    <div className="price-card">
                        <div className="price-card-content">
                            <h4>Premium Membership</h4>
                            <h3>$79.99/month</h3>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Everything included in Standard Membership, plus:
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Unlimited guest passes
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Priority booking for personal training sessions
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Nutritional consultation with a certified dietitian
                            </p>
                            <p>
                                <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                                Exclusive access to premium amenities
                            </p>
                        </div>
                        <Link className="btn-price" to="/signup">Join Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}