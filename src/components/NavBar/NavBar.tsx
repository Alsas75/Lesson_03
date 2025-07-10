import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/" className={style.link}>Home</Link>
        <Link to="/registration" className={style.link}>Sign Up</Link>
        <Link to="/gender-predictor" className={style.link}>Gender predictor</Link>
        <Link to="/age-predictor" className={style.link}>Age predictor</Link>
        <Link to="/counter" className={style.link}>Counter</Link>
        <Link to="/about" className={style.link}>О нас</Link>
        <Link to="/contacts" className={style.link}>Контакты</Link>
        <Link to="/account" className={style.link}>User account</Link>
      </nav>
    </>
  );
};
