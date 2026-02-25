import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import './OrdersPage.css';

export function OrdersPage({ orderItems }) {
  return (
    <>
      <title>Orders</title>
      <Header orderItems={orderItems} />
      <div className="orders-page">
        Your ordered dishes will appear here.
      </div>
      <Footer />
    </>
  );
}