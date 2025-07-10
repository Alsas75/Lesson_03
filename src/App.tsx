import "./App.css";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
// import Demo from "./components/Demo";
import DetermineGender from "./components/DetermineGender/DetermineGender";
// import SpaceMissionForm from "./components/SpaceMissionForm";
// import Greeting from "./components/Greeting/Greeting";
// import Goodbye from "./components/Goodbye/Goodbye";
// import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
// import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
// import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layuot/MainLayuot";
import { ROUTES } from "./constants/routes";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { UserLayout } from "./layuot/UserLayout";
import Settings from "./components/UserAccount/Settings/Settings";
import Information from "./components/UserAccount/Information/Information";
// const name = "John";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route
              path={ROUTES.DETERMINE_GENDER}
              element={<DetermineGender />}
            />
            <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.CONTACTS} element={<Contact />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.USER} element={<UserLayout />}>
              <Route path="/account/settings" element={<Settings />} />
              <Route path="/account/information" element={<Information />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* 
      <DetermineGender />
      <AgePredictor />
      <Demo />
      <SpaceMissionForm />
      <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
      <Greeting name={name} />
      <Goodbye /> */}
    </>
  );
}
export default App;
