import { BrowserRouter, Routes, Route } from 'react-router'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/Home';
import { ContactPage } from './pages/Contact';
import { MenuPage } from './pages/Menu';
import { CartPage } from './pages/Cart';
import { ReservationPage } from './pages/Reservation';
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
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/reservation" element={<ReservationPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
