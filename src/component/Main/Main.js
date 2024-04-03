import Hero from "../Hero/Hero.js";
import Leagues from "../Leagues/Leagues.js";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Leagues />
    </div>
  );
};
export default Main;
