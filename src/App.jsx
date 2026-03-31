import { Routes, Route } from 'react-router'
import { useState } from 'react';
import { NotFound } from './pages/NotFound';
import { OrderSuccess } from './pages/OrderSuccess';
import { HomePage } from './pages/home/Home';
import { AboutSection } from './pages/about/AboutSection';
import { ContactPage } from './pages/contact/Contact';
import { MenuPage } from './pages/menu/Menu';
import { OrdersPage } from './pages/orders/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import './App.css'

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [orders, setOrders] = useState([]);

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

  const deleteOrder = (id) => {
    const updatedItems = orderItems.filter((orderItem) => orderItem.id !== id);
    setOrderItems(updatedItems);
  }

  const updateOrder = (id, quantity) => {
    const updatedItems = orderItems.map((orderItem) => {
      if (orderItem.id === id) {
        return { ...orderItem, quantity: orderItem.quantity + quantity };
      }
      return orderItem;
    }).filter((orderItem) => orderItem.quantity > 0);
    setOrderItems(updatedItems);
  }

  const placeOrder = () => {
    if (orderItems.length === 0) {
      return;
    }
    setOrders(prev => {
      const updatedOrders = [...prev, ...orderItems];
      return updatedOrders;
    });
    setOrderItems([]);
  };

  const [searchText, setSearchText] = useState('');

  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route index element={<HomePage orderItems={orderItems} onSearch={setSearchText} searchText={searchText} />}></Route>
          <Route path="/about" element={<AboutSection orderItems={orderItems} onSearch={setSearchText} searchText={searchText} />}></Route>
          <Route path="/contact" element={<ContactPage orderItems={orderItems} onSearch={setSearchText} searchText={searchText} />}></Route>
          <Route path="/menu" element={<MenuPage addOrder={addOrder} orderItems={orderItems} searchText={searchText} onSearch={setSearchText} />}></Route>
          <Route path="/orders" element={<OrdersPage orders={orders} orderItems={orderItems} onSearch={setSearchText} searchText={searchText} />}></Route>
          <Route path="/checkout" element={<CheckoutPage orderItems={orderItems} deleteOrder={deleteOrder} updateOrder={updateOrder} placeOrder={placeOrder} />}></Route>
          <Route path="/success" element={<OrderSuccess />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App
