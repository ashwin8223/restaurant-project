import { useNavigate } from 'react-router';
import { formatMoney } from '../../utils/money';
import './PaymentSummary.css';

export function PaymentSummary({ orderItems, placeOrder}) {

  const navigate = useNavigate();

  function handlePlaceOrder() {
    placeOrder();
    navigate('/success');
  }
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>
      {orderItems.length > 0 && (
        <>
          <div className="payment-summary-details">
            <div className="payment-summary-row">
              <span>Subtotal:</span>
              <span>{formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0))}</span>
            </div>
            <div className="payment-summary-row">
              <span>Tax:</span>
              <span>{formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.1)}</span>
            </div>
            <div className="payment-summary-row">
              <span>Delivery Fee:</span>
              <span>{formatMoney(5.00)}</span>
            </div>
            <div className="payment-summary-row total">
              <span>Total:</span>
              <span>{formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0) * 1.1 + 5.00)}</span>
            </div>
          </div>
          <div className="checkout-button-container">
            <button onClick={handlePlaceOrder} className="checkout-button">Place your order</button>
          </div>
        </>
      )}
    </div>
  );
}