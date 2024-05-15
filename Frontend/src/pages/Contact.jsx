import { faDiscord, faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select';

const options = [
    { value: '', label: '' },
    { value: 'Body Building', label: 'Body Building' },
    { value: 'Boxing', label: 'Boxing' },
    { value: 'Cycling', label: 'Cycling' },
    { value: 'Fitness', label: 'Fitness' },
    { value: 'Karate', label: 'Karate' },
    { value: 'Meditation', label: 'Meditation' },
    { value: 'Running', label: 'Running' },
    { value: 'Workout', label: 'Workout' },
    { value: 'Yoga', label: 'Yoga' }
];


export default function Contact(){

    return(
        <>
            <div style={{height:"210vh", background:"#0a0a0a", padding:"100px 0"}} >
                <h1 className="contact-us-h1">Contact Us</h1>
                
                <div className="contact-us-container">
                    <div className="contact-info">
                        <h1>Welcome to Gym Bro – Your Body, Perfected!</h1>
                        <p>
                            At Gym Bro, we´re your partners in sculpting the physique 
                            you´ve always wanted. Our expert trainers and 
                            nutritionists are dedicated to crafting personalized 
                            fitness and nutrition plans tailored to your goals. 
                            Join us and unlock your body´s full potential today!
                        </p>
                        <div className="info-section-box">
                            <div className="info-section">
                                <h2>Location</h2>
                                <p>
                                    123 Jamae Mezouak, 
                                    <br />
                                    Tetouan, Morocco
                                </p>
                            </div>
                            <div className="info-section">
                                <h2>Opening Hours</h2>
                                <p>
                                    Mon - Fri: 9:00 AM - 8:00 PM 
                                    <br />
                                    Sat - Sun: 10:00 AM - 6:00 PM
                               </p>
                            </div>
                            <div className="info-section">
                                <h2>Information</h2>
                                <p>
                                    If you have any questions or inquiries, please feel free to reach out to us: 
                                        <br /><br />
                                    <strong>Email:</strong> info@brogym.com 
                                        <br />
                                    <strong>Phone:</strong> +1 (123) 456-7890
                                </p>
                            </div>
                            <div className="info-section">
                                <h2>Follow Us On</h2>
                                <div className="info-section-icons">
                                    <FontAwesomeIcon className="contact-icon" icon={faFacebook} />
                                    <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                                    <FontAwesomeIcon className="contact-icon" icon={faWhatsapp} />
                                    <FontAwesomeIcon className="contact-icon" icon={faDiscord} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h1>Send Us a Message</h1>
                        <form>
                            <input type="text" id="name" name="name" placeholder="Name" />
                            <input type="email" id="email" name="email" placeholder="Email@gymbro.com" />
                            <Select options={options} placeholder="Select Class" className="select-class" />
                            <textarea id="message" name="message" placeholder="Message" ></textarea>
                            <div className="button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map-container">
                    <div className="map">
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6602373764886!2d-122.08424968469238!3d37.42199977982358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b5f023769b%3A0x2bad5c7c047117a7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1499785725501"
                            width="100%"
                            height="400"
                            // frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            // tabindex="0"
                        ></iframe>
                    </div>
                </div>
                
            </div>
        </>
    )
}
