import { menuItems } from "../data/menuList";
import { MenuItem } from './MenuItem';
import '../styles/Menu.css';

export function MenuPage() {
  return (
    <div className="menu-page">
      <div className="menu-container">
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.id} Items={item} />
          );
        })}
      </div>
    </div>
  );
}