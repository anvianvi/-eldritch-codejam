import "./App.css";
import { ancientsData } from "./data/ancients";
import { blueCards, brownCards, greenCards } from "./data/mythicCards/index";
import Ancients from "./modules/ancients";
import Deck from "./modules/deck";
import Dificulty from "./modules/dificulty";
 
console.log(ancientsData)
console.log(brownCards)
console.log(blueCards)
console.log(greenCards)

function App() {
  return (
    <div className="app">
      <Ancients />
      <Dificulty />
      <Deck />
    </div>
  );
}

export default App;


