import { formatMoney } from "../../utils/money";

export function PaymentSummary({ orderItems }) {
  return (
    <div className="payment-summary">
      <h2>Payment Summary</h2>
      {orderItems.length > 0 && (
        <>
          <p>Subtotal: {formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
          <p>Tax: {formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.1)}</p>
          <p>Delivery Fee: {formatMoney(5.00)}</p>
          <p>Total: {formatMoney(orderItems.reduce((total, item) => total + item.price * item.quantity, 0) * 1.1 + 5.00)}</p>
          <button className="checkout-button">Proceed to Payment</button>
        </>
      )}
    </div>
  );
}