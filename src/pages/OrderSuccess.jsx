import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChefIcon from '../assets/images/icons/chef.svg';
import './OrderSuccess.css';

export function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/orders');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="order-success">
      <img src ={ChefIcon} alt="Chef Icon" className="chef-icon" />
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully placed. Your tasty treat is being prepared!</p>
    </div>
  );
}