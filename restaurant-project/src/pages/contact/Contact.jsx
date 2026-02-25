import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./Contact.css";

export function ContactPage({ orderItems }) {
  return (
    <>
      <title>Contact Us</title>
      <Header orderItems={orderItems} />
      <div className="contact-page">Contact Page</div>
      <Footer />
    </>
  );
}