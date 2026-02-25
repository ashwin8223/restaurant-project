import { Routes, Route } from 'react-router'
import { useState } from 'react';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/home/Home';
import { AboutSection } from './pages/about/AboutSection';
import { ContactPage } from './pages/contact/Contact';
import { MenuPage } from './pages/menu/Menu';
import { OrdersPage } from './pages/orders/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import './App.css'

function App() {
  const [orderItems, setOrderItems] = useState([]);

  const addOrder = (item) => {
    const exisitngItem = orderItems.find((orderItem) => orderItem.id === item.id);
    if (exisitngItem) {
      const updatedItems = orderItems.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setOrderItems(updatedItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  }

  console.log(orderItems);

  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route index element={<HomePage orderItems={orderItems} />}></Route>
          <Route path="/about" element={<AboutSection orderItems={orderItems} />}></Route>
          <Route path="/contact" element={<ContactPage orderItems={orderItems} />}></Route>
          <Route path="/menu" element={<MenuPage addOrder={addOrder} orderItems={orderItems} />}></Route>
          <Route path="/orders" element={<OrdersPage orderItems={orderItems}/>}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App
