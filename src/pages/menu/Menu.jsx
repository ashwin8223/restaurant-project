import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { menuItems } from "../../data/menuList";
import { MenuItem } from './MenuItem';
import './Menu.css';

export function MenuPage({ addOrder, orderItems }) {
  return (
    <>
      <title>Menu</title>
      <Header orderItems={orderItems}/>
      <div className="menu-page">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-container">
          <div className="menu-grid">
            {menuItems.map((item) => {
              return (
                <MenuItem key={item.id} Items={item} addOrder={addOrder} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}