import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderItems } from "./OrderItems";
import './OrdersPage.css';

export function OrdersPage({ orders, orderItems }) {
  return (
    <>
      <title>Orders</title>
      <Header orderItems={orderItems} />
      <div className="orders-page">
        {orders.length === 0 ? (
          <div className="orders-empty">
            <h3>Your ordered dishes will appear here.</h3>
          </div>
        ) : (
          <div className="orders-grid">
            <div className="orders-section">
              {orders.map((item) => {
                return (
                  <OrderItems key={item.id} Items={item} />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}