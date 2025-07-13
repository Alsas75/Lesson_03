import { NavLink, Outlet } from "react-router-dom";
import style from "./UserLayout.module.css";
import { ROUTES } from "../constants/routes";

export const UserLayout = () => {
  return (
    <nav>
      <h2>User account</h2>
      <nav>
        <NavLink to={ROUTES.ACCOUNT_SETTINGS} className={style.link}>
          Account Settings
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT_INFO} className={style.link}>
          Personal information
        </NavLink>
      </nav>
      <Outlet />
    </nav>
  );
};
