import { NavLink } from 'react-router';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-container">
      <div className="image-container"></div>
      <div className="section-content">
        <h1>
          Welcome
          {/*
          <span>Welcome to</span>
          <span>Tasty Treat</span>
          */}
        </h1>
        <p>
          Experience the best dining with us. Delicious food, cozy atmosphere, and exceptional service await you.
          {/*
          <span>Experience the best dining with us.</span> 
          <span>Delicious food, cozy atmosphere, and exceptional service await you.</span>
          */}
        </p>
      </div>
      <div className="hero-buttons">
        <button className="hero-button"><NavLink to="/menu" className="hero-button-link">Explore Menu</NavLink></button>
      </div>
    </section>
  );
}