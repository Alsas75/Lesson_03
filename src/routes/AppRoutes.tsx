import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layuot/MainLayuot";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import DetermineGender from "../components/DetermineGender/DetermineGender";
import Information from "../components/UserAccount/Information/Information";
import Settings from "../components/UserAccount/Settings/Settings";
import { ROUTES } from "../constants/routes";
import { UserLayout } from "../layuot/UserLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

import { ProductsList } from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import UserPage from "../pages/UserPage/UserPage";
import { UsersList } from "../components/UsersList/UsersList";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import CreateProduct from "../pages/CreateProduct/CreateProduct";


export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<CreateProduct />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.DETERMINE_GENDER} element={<DetermineGender />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path={ROUTES.CONTACTS} element={<Contact />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
          <Route path={ROUTES.USERS} element={<UsersList />} />
          <Route path={ROUTES.USERS + "/:id"} element={<UserPage />} />
          <Route path={ROUTES.PRODUCTS + "/:id"} element={<ProductPage />} />

          <Route path={ROUTES.USER} element={<UserLayout />}>
            <Route path={ROUTES.ACCOUNT_SETTINGS} element={<Settings />} />
            <Route path={ROUTES.ACCOUNT_INFO} element={<Information />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
