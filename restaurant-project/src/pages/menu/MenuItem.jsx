import { formatMoney } from '../../utils/money';

export function MenuItem({ Items, addOrder }) {
  return (
    <div className="menu-item">
      <div className="menu-item-image-container">
        <img className="menu-item-image" src={Items.image} alt={Items.name} />
      </div>
      <div className="menu-item-details">
        <h3>{Items.name}</h3>
        <p>{Items.description}</p>
        <div className="order-button-container">
          <p className="menu-item-price">{formatMoney(Items.price)}</p>
          <button className="order-button" onClick={() => addOrder(Items)}>Order Now</button>
        </div>
      </div>
    </div>
  );
};