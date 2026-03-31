import { NavLink, useNavigate } from "react-router";
import BagIcon from '../assets/images/icons/bag-icon.gif';
import './NavBar.css';

export function NavBar({ orderItems, onSearch, searchText }) {

  let totalQuantity = 0;

  orderItems.forEach((item) => {
    totalQuantity += item.quantity;
  });

  const navigate = useNavigate();

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.trim();

      if (!value) return;

      onSearch(value);

      setTimeout(() => {
        navigate('/menu');
      }, 0);
    }
  };

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
        <input type="text" placeholder="Search for dishes..." className="search-bar" onChange={handleSearch} onKeyDown={handleKeyPress} value={searchText || ""}/>
      </div>
      <div className="right-section">
        <div className="orders-link">
          <NavLink to="/orders">Orders</ NavLink>
        </div>
        <div className="checkout-link">
          <NavLink to="/checkout">
            <img src={BagIcon} alt="Bag Icon" className="bag-icon" />
            <div className="order-quantity">{totalQuantity}</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}