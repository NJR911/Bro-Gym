import { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';


export default function Modal({ isVisible, onClose, plan }) {
    const [paymentType, setPaymentType] = useState('');
    const [error, setError] = useState('');
    const { user } = useAuth();


    const handlePaymentChange = (event) => {
        setPaymentType(event.target.value);
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!paymentType) {
            setError('Please select a payment type.');
        } else {
            const data = {
                user_id: user?.id,
                type: plan.name,
                price: plan.price.match(/\d+(\.\d{1,2})?/)[0],
                start_date : new Date().toISOString().split('T')[0],
                end_date : null
            }

            console.log(data);

            try {
                const response = await axios.post('http://localhost:8000/api/membership', data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
            // Handle payment submission logic
            alert(`Payment type selected: ${paymentType}\nPlan: ${data.type}\nPrice: ${data.price}`);
            onClose();
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>{plan.name}</h2>
                <h3>{plan.price}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="payment-options">
                        <label>
                            <input
                                type="radio"
                                name="paymentType"
                                value="creditCard"
                                checked={paymentType === 'creditCard'}
                                onChange={handlePaymentChange}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentType"
                                value="paypal"
                                checked={paymentType === 'paypal'}
                                onChange={handlePaymentChange}
                            />
                            PayPal
                        </label>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn-submit">Confirm Payment</button>
                </form>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
