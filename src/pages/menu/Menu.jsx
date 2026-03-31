import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { menuItems } from '../../data/menuList';
import { MenuItem } from './MenuItem';
import './Menu.css';

export function MenuPage({ addOrder, orderItems, searchText, onSearch }) {

  const filteredItems = searchText ? menuItems.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())) : menuItems;

  return (
    <>
      <title>Menu</title>
      <Header orderItems={orderItems} onSearch={onSearch} searchText={searchText} />
      <div className="menu-page">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-container">
          <div className="menu-grid">
            {filteredItems.map((item) => {
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