import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Hero } from './Hero';
import './Home.css';

export function HomePage({ orderItems }) {
  return (
    <>
      <title>Home</title>
      <Header orderItems={orderItems} />
      <div className="home-page">
        <Hero />
      </div>
      <Footer />
    </>
  );
}