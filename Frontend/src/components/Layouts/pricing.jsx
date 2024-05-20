import PriceCard from "./PriceCard";
import './pricing.css';

const membershipPlans = [
    {
        name: "Basic Membership",
        price: "$29.99/month",
        features: [
            "Access to cardio and weight training equipment",
            "Locker room and shower facilities",
            "10% discount on personal training sessions",
            "Group fitness classes available for an additional fee"
        ]
    },
    {
        name: "Standard Membership",
        price: "$49.99/month",
        features: [
            "Everything included in Basic Membership, plus:",
            "Unlimited access to group fitness classes",
            "One complimentary personal training session per month",
            "Towel service",
            "Access to sauna facilities"
        ]
    },
    {
        name: "Premium Membership",
        price: "$79.99/month",
        features: [
            "Everything included in Standard Membership, plus:",
            "Unlimited guest passes",
            "Priority booking for personal training sessions",
            "Nutritional consultation with a certified dietitian",
            "Exclusive access to premium amenities"
        ]
    }
];

export default function Pricing() {
    return (
        <div className="price-container">
            <h2 className="section-header">Our Membership Plan</h2>
            <p className="section-superheader">
                Choose the membership plan that fits your fitness <span>Goals</span> and <span>Lifestyle</span>.
            </p>
            <div className="price-grid">
                {membershipPlans.map((plan, index) => (
                    <PriceCard key={index} plan={plan} />
                ))}
            </div>
        </div>
    );
}
