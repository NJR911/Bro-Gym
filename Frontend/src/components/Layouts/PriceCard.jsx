import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PropTypes from 'prop-types';
import Modal from './Modal'; // Import the Modal component

export default function PriceCard({ plan }) {
    const { user } = useAuth();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleUpgradeClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="price-card">
            <div className="price-card-content">
                <h4>{plan.name}</h4>
                <h3>{plan.price}</h3>
                {plan.features.map((feature, index) => (
                    <p key={index}>
                        <FontAwesomeIcon className="price-icon" icon={faCircleCheck} />
                        {feature}
                    </p>
                ))}
            </div>
            {user ? (
                <>
                    <button className="btn-price" onClick={handleUpgradeClick}>Upgrade</button>
                </>
            ) : (
                <>
                    <Link className="btn-price" to="/signup">Join Now</Link>
                </>
            )}
            <Modal isVisible={isModalVisible} onClose={handleCloseModal} plan={plan} />
        </div>
    );
}

PriceCard.propTypes = {
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
