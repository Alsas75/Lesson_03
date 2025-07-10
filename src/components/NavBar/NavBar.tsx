import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Sign Up</Link>
        <Link to="/gender-predictor">Gender predictor</Link>
        <Link to="/age-predictor">Age predictor</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/account">User account</Link>
      </nav>
    </>
  );
};
