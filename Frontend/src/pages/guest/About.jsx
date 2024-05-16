import { Link } from 'react-router-dom';

export default function About(){
    return (
        <>
        
            <div style={{height:"110vh", background:"#0a0a0a", padding:"20px 0"}}>
                <div className="about-page">
                    <div className="about-header">
                        <h1>About Bro-Gym</h1>
                        <p>Your ultimate destination for fitness and wellness!</p>
                    </div>
                    <div className="about-content">
                        <h2>Our Story</h2>
                        <p>At Bro-Gym, we believe that fitness is not just a hobby, but a way of life. Our journey began with a simple idea: to create a community-driven space where individuals can achieve their fitness goals, challenge their limits, and become the best version of themselves.</p>
                        <p>Since our inception, we have been committed to providing top-notch facilities, personalized training programs, and a supportive environment that empowers our members to unleash their full potential.</p>
                        <p>Whether you´re a seasoned athlete or just starting your fitness journey, Bro-Gym welcomes you with open arms. Join us today and let´s crush those goals together!</p>
                    </div>
                    <div className="about-cta">
                        <h3>Ready to Join Bro-Gym?</h3>
                        <p>Experience the difference with Bro-Gym membership.</p>
                        <Link className="btn-cta" to="/membership">View Memberships</Link>
                    </div>
                </div>
            </div>
        </>
    );
}






    
        
            
        
    

