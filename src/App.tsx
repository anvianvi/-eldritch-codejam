import "./App.css";
import Ancients from "./modules/ancients";
import Deck from "./modules/deck";
import Dificulty from "./modules/dificulty";





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


