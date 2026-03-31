import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./Contact.css";

export function ContactPage({ orderItems, onSearch, searchText }) {
  return (
    <>
      <title>Contact Us</title>
      <Header orderItems={orderItems} onSearch={onSearch} searchText={searchText} />
      <div className="contact-page">Contact Page</div>
      <Footer />
    </>
  );
}