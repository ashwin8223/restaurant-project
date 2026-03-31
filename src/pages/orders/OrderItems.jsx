import { formatMoney } from "../../utils/money";

export function OrderItems({ Items }) {
  return (
    <div className="order-item">
      <div className="order-item-image-container">
        <img className="order-item-image" src={Items.image} alt={Items.name} />
      </div>
      <div className="order-item-details">
        <div className="order-item-row name">{Items.name}</div>
        <div className="order-item-row quantity">Quantity: {Items.quantity}</div>
        <div className="order-item-row price">Total: {formatMoney(Items.price * Items.quantity)}</div>
      </div>
    </div>
  );
}