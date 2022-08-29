import { createNewDeck, shafledeck } from "../deck";
import "./style.css";

export default function Dificulty() {
  return (
    <div className="dificulty-container">
      {/* <div className="dificulty">easy</div> */}
      <div className="dificulty"
      onClick={()=>createNewDeck(0)}>Shufle!</div>
      {/* <div className="dificulty">hard</div> */}
    </div>
  );
}


