import { Link, Outlet } from "react-router-dom";
import style from "./UserLayout.module.css";

export const UserLayout = () => {
  return (
    <div>
      <h2>User account</h2>
      <nav>
        <Link to="/account/settings" className={style.link}>Settings</Link>
        <Link to="/account/information" className={style.link}>Information</Link>
      </nav>
      <Outlet />
    </div>
  );
};
