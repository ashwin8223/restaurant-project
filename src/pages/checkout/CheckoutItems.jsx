import { formatMoney } from '../../utils/money';

export function CheckoutItems({ Items, deleteOrder, updateOrder }) {
  return (
    <div className="checkout-item">
      <div className="checkout-item-image-container">
        <img className="checkout-item-image" src={Items.image} alt={Items.name} />
      </div>
      <div className="checkout-item-details">
        <div className="checkout-item-row name">{Items.name}</div>
        <div className="checkout-item-row quantity">Quantity: {Items.quantity}</div>
        <div className="checkout-item-row price">Total: {formatMoney(Items.price * Items.quantity)}</div>
      </div>
      <div className="checkout-item-update-quantity">
        <button className="checkout-item-update-button" onClick={() => updateOrder(Items.id, 1)}>+</button>
        <button className="checkout-item-update-button" onClick={() => updateOrder(Items.id, -1)}>-</button>
      </div>
      <div className="checkout-item-remove">
        <button className="checkout-item-remove-button" onClick={() => deleteOrder(Items.id)}>Remove</button>
      </div>
    </div>
  );
}