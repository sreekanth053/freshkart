import headerStyles from "../styles/header.module.css";
import cartImg from "../images/Cart.png";
import { useContext } from "react";
import { AppContext } from "../services/AppContext"; // Import AppContext as a named export
import { AuthContext } from "../services/AuthContext"; // Import AuthContext as a named export
import { NavLink } from "react-router-dom";
import userImg from "../images/User.png";

const Header = () => {
  const [state, setState] = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  // Ensure state.cart is defined and iterable, if not default to empty array
  const cartCount = state && state.cart && Array.isArray(state.cart) ? state.cart.length : 0;

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.logo}>
        <NavLink to="/home">Freshkart</NavLink>
      </div>
      <div className={headerStyles.nav}>
        <div className={headerStyles.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${headerStyles.active}` : ""
            }
            to="/items/fruits"
          >
            Fruits
          </NavLink>
        </div>
        <div className={headerStyles.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${headerStyles.active}` : ""
            }
            to="/items/vegetables"
          >
            Vegetables
          </NavLink>
        </div>
      </div>
      <div className={headerStyles.cart}>
        <NavLink to="/cart">
          <img src={cartImg} alt="" />
          {cartCount > 0 && (
            <div className={headerStyles.count}>{cartCount}</div>
          )}
          <span>Cart</span>
        </NavLink>
      </div>

      {isLoggedIn ? (
        <div className={headerStyles.user}>
          <img src={userImg} alt="" />
          <div className={headerStyles.menuContainer}>
            <div className={headerStyles.menu}>
              <div className={headerStyles.menuItem}>My Profile</div>
              <div className={headerStyles.menuItem}>Order history</div>
              <div
                className={headerStyles.menuItem}
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={headerStyles.login}>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
