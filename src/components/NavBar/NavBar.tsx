import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import style from "./NavBar.module.css";
import { useCurrentUser } from "../../hooks/useCurentUser";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };

  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout () {
    setIsAuthorized(false);
  }
  return (
    <>
            <nav className="flex justify-center items-center gap-4 flex-wrap bg-pink-200 min-h-14 p-6">
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={"/galery"} className={classSelector}>
          Gelery
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.DETERMINE_GENDER} className={classSelector}>
          Gender predictor
        </NavLink>
        <NavLink to={ROUTES.AGE_PREDICTOR} className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>
          Counter
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          О нас
        </NavLink>
        <NavLink to={ROUTES.CONTACTS} className={classSelector}>
          Контакты
        </NavLink>
        <NavLink to={ROUTES.USER} className={classSelector}>
          User account
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.ADD_PRODUCT} className={classSelector}>
          Add Product
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        <NavLink to={ROUTES.TOGGLECARD} className={classSelector}>
        ToggleCard
        </NavLink>
        {user?.email}
        {counter}

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
