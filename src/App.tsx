import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
const name = "John";
function App() {
  return (
    <>
    <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
      <Greeting name={name} />
      <Goodbye />
      <ProfileCard
        avatar={
          "https://static-basket-02.wbbasket.ru/vol25/256283/wbkids_articles_editor/8d0bfa7c-576d-440b-b805-b17f1e612f4d.jpg"
        }
        name={name}
        description={"Loves pets"}
      />
    </>
  );
}
export default App;
