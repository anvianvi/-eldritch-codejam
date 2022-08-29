import "./App.css";
import Ancients from "./modules/ancients";
import Deck from "./modules/deck";
import Dificulty from "./modules/dificulty";



function App() {
  return (
    <div className="app" id="app">
      <Ancients />
      <Dificulty />
      <div className="decktemplate" id="decktemplate"></div>
      {/* <Deck /> */}
    </div>
  );
}

export default App;