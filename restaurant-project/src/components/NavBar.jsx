import { NavLink } from "react-router";
import BagIcon from '../assets/images/icons/bag-icon.gif';
import '../styles/NavBar.css';

export function NavBar() {
  return (
    <nav className="nav-bar-container">
      <div className="left-section">
        <div className="company-logo">
          <NavLink to="/" className="company-logo-active">Tasty Treat</NavLink>
        </div>
      </div>
      <div className="middle-section">
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
        </ul>
      </div>
      <div className="right-section">
        <div className="orders-link">
          <NavLink to="/orders">Orders</ NavLink>
        </div>
        <div className="checkout-link">
          <NavLink to="/checkout">
            <img src={BagIcon} alt="Bag Icon" className="bag-icon" />
            <div className="order-quantity">0</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}