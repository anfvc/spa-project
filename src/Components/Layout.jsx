import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Layout() {
  return (
    <div className="layout">
      <nav>
        <ul className="left-navbar">
          <li>Women</li>
          <li>Men</li>
          <li>Electronics</li>
        </ul>
        <ul className="mid-navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
        <ul className="right-navbar">
          <li>
            <NavLink to="/cart"><span className="cart-icon"><FontAwesomeIcon icon={faCartShopping} /></span></NavLink>
          </li>
          <li>
            <NavLink to="/liked"><span className="heart-icon"><FontAwesomeIcon icon={faHeart}/></span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
