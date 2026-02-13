import '../styles/Hero.css';

export function Hero() {
  return (
    <section className="hero-container">
      <div className="section-content">
        <h1>Welcome to Tasty Treat</h1>
        <p>Experience the best dining with us. Delicious food, cozy atmosphere, and exceptional service await you.</p>
      </div>
      <div className="hero-buttons">
        <button className="hero-button">View Menu</button>
        <button className="hero-button">Make a Reservation</button>
      </div>
    </section>
  );
}