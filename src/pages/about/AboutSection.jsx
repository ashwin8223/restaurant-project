import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './AboutSection.css';

export function AboutSection({ orderItems, onSearch, searchText }) {
  return (
    <>
      <title>About Us</title>
      <Header orderItems={orderItems} onSearch={onSearch} searchText={searchText} />
      <div className="about-page">
        <section className="about-section">
          <h2>About Us</h2>
          <p>At Tasty Treat, we are passionate about delivering an exceptional dining experience. Our restaurant is dedicated to serving delicious food made from the freshest ingredients, in a cozy and welcoming atmosphere. Whether you're joining us for a casual meal or a special occasion, we strive to provide outstanding service and unforgettable flavors. Come and discover why Tasty Treat is the perfect place to satisfy your cravings and create lasting memories.</p>
        </section>
      </div>
      <Footer />
    </>
  );
}