import { formatMoney } from '../../utils/money';

export function CheckoutItems({ Items, deleteOrder }) {
  return (
    <div className="checkout-item">
      <div className="checkout-item-image-container">
        <img className="checkout-item-image" src={Items.image} alt={Items.name} />
      </div>
      <div className="checkout-item-details">
        <h3>{Items.name}</h3>
        <p>Quantity: {Items.quantity}</p>
        <p>Total: {formatMoney(Items.price * Items.quantity)}</p>
        <button className="checkout-item-remove-button" onClick={() => deleteOrder(Items.id)}>Remove</button>
      </div>
    </div>
  );
}