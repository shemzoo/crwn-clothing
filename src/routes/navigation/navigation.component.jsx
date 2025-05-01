import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { signOutStart } from "../../store/user/user.action.js";
import { useDispatch } from "react-redux";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  const currentUser = useSelector((state) => {
    return selectCurrentUser(state);
  });
  const isCartOpen = useSelector((state) => {
    return selectIsCartOpen(state);
  });

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              onClick={signOut}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <Link
              className="nav-link"
              to="auth"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
