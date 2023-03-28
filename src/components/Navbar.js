import { NavLink } from "react-router-dom";
import { BsPaypal } from 'react-icons/bs';
import Time from "./Clock/UseTime";
import { useState,useEffect } from "react";
import Button from "./Button";
export default function Navbar(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);
  const cartCount = props.cart.reduce((total, product) => {
    if (product.quantity >= 0) {
      return total + product.quantity;
    }
    return total;
  }, 0);
  

  return (
    <nav className="navbar">
        <Time/>
      <NavLink to="/" className="nav-brand">
        Supermarket
      </NavLink>
      <ul>

      

      <li className="nav-item">
          <Button className="theme-switcher" onClick={handleThemeClick}>{isDarkTheme ? "Dark" : "Light"}</Button>
        </li>
      
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
