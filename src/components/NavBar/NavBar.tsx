import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import style from "./NavBar.module.css";


export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.navLinkActive : style.navLink;
  };

  return (
    <>
      <nav className={style.navBar}>
        <NavLink to="/" className={classSelector}>Home</NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>Sign Up</NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>Sign In</NavLink>
        <NavLink to={ROUTES.DETERMINE_GENDER} className={classSelector}>Gender predictor</NavLink>
        <NavLink to={ROUTES.AGE_PREDICTOR} className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>Counter</NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>О нас</NavLink>
        <NavLink to={ROUTES.CONTACTS} className={classSelector}>Контакты</NavLink>
        <NavLink to={ROUTES.USER} className={classSelector}>User account</NavLink>
        <NavLink to={ROUTES.PRODUCTS} className={classSelector}>        
          Products
        </NavLink>
        <NavLink to={ROUTES.ADD_PRODUCT} className={classSelector}>        
          Add Product
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>Users</NavLink>

        {/* <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.DETERMINE_GENDER} element={<DetermineGender />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path={ROUTES.CONTACTS} element={<Contact />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.USER} element={<UserLayout />}> */}

        {/* <NavLink to="/" className={style.NavLink}>Home</NavLink>
        <NavLink to="/registration" className={style.NavLink}>Sign Up</NavLink>
        <NavLink to="/gender-predictor" className={style.NavLink}>Gender predictor</NavLink>
        <NavLink to="/age-predictor" className={style.NavLink}>Age predictor</NavLink>
        <NavLink to="/counter" className={style.NavLink}>Counter</NavLink>
        <NavLink to="/about" className={style.NavLink}>О нас</NavLink>
        <NavLink to="/contacts" className={style.NavLink}>Контакты</NavLink>
        <NavLink to="/account" className={style.NavLink}>User account</NavLink>         */}
      </nav>
    </>
  );
};
