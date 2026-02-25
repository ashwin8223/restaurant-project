import { NavBar } from './NavBar';

export function Header({ orderItems }) {
  return(
    <header>
      <NavBar orderItems={orderItems} />
    </header>
  );
}