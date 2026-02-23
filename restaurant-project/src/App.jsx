import { Routes, Route } from 'react-router'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/Home';
import { AboutSection } from './pages/AboutSection';
import { ContactPage } from './pages/Contact';
import { MenuPage } from './pages/Menu';
import { OrdersPage } from './pages/Orders';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutSection />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/orders" element={<OrdersPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
