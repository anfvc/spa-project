import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./LayOut.css";

function Layout() {
  return (
    <div className="layout">
      <div className="nav-holder">
        <div className="extra-details-container">
          <div className="extra-details">
            <span>Help and Contact</span>
            <span>Free standard delivery over €29,90 & free returns*</span>
            <span>100-day return policy</span>
          </div>
        </div>
        <nav>
          <ul className="left-navbar">
            <li>Women</li>
            <li>Men</li>
          </ul>
          <ul className="mid-navbar">
            <NavLink to="/" title="Home">
              <li>Home</li>
            </NavLink>

            <NavLink to="/products" title="Products">
              <li>Products</li>
            </NavLink>
          </ul>
          <ul className="right-navbar">
            <NavLink to="/cart">
              <li className="cart-icon" title="Shopping Cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
            </NavLink>
            <NavLink to="/liked">
              <li className="heart-icon" title="Liked Products">
                <FontAwesomeIcon icon={faHeart} />
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
