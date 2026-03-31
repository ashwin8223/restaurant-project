import { NavBar } from './NavBar';

export function Header({ orderItems, onSearch, searchText }) {
  return (
    <header>
      <NavBar orderItems={orderItems} onSearch={onSearch} searchText={searchText} />
    </header>
  );
}