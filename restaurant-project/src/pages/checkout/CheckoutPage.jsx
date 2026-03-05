import { NavLink } from 'react-router';
import { CheckoutItems } from './CheckoutItems';
import { PaymentSummary } from './PaymentSummary';
import './CheckoutPage.css';

export function CheckoutPage({ orderItems, deleteOrder }) {
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="checkout-logo">
          <NavLink to="/" className="checkout-logo-active">Tasty Treat</NavLink>
        </div>
      </div>
      <div className="checkout-page">
        <div className="checkout-title">
          Review Your Order
        </div>
        <div className="checkout-grid">
          <div className="checkout-section">
            {orderItems.map((item) => {
              return (
                <CheckoutItems key={item.id} Items={item} deleteOrder={deleteOrder} />
              );
            })}
          </div>
          <div className="payment-section">
            <PaymentSummary orderItems={orderItems} />
          </div>
        </div>
      </div>
    </>
  );
}