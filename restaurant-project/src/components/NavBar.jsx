import { NavLink } from "react-router";
import '../styles/NavBar.css';

export function NavBar() {
  return(
    <nav className="nav-bar-container">
      <div className="company-logo">Tasty Treat</div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/reservation">Reservation</NavLink></li>
      </ul>
    </nav>
  );
}