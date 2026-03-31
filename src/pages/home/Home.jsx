import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Hero } from './Hero';
import './Home.css';

export function HomePage({ orderItems, onSearch, searchText }) {
  return (
    <>
      <title>Home</title>
      <Header orderItems={orderItems} onSearch={onSearch} searchText={searchText} />
      <div className="home-page">
        <Hero />
      </div>
      <Footer />
    </>
  );
}