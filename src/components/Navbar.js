import { NavLink } from "react-router-dom";
import { BsPaypal } from 'react-icons/bs';

export default function Navbar(props) {
  const cartCount = props.cart.reduce((total, product) => {
    if (product.quantity >= 0) {
      return total + product.quantity;
    }
    return total;
  }, 0);
  

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        Supermarket
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">
            Abaout us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cart">
            <div>
          <BsPaypal className="icon" />
          { cartCount > 0 ?
          <span className="badge">({cartCount })</span>:""}</div> 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
