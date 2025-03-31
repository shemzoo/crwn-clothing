import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="logo-container"
          to="/"
        >
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/shop"
          >
            SHOP
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutUser}
            >
              SIGN OUT
            </span>
          ) : (
            <Link
              className="nav-link"
              to="auth"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={toggleCartHandler} />
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
