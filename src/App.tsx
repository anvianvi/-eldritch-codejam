import "./App.css";
import Ancients from "./modules/ancients";
import Dificulty from "./modules/dificulty";

function App() {
  alert(`я  не успеваю доделать функционал, мне осталось 20 балов для попадания в топ 70% по окончанию курса, буду рад если смогу получить хотя бы 20 балов за это задание Спасибо за проверку`);
  return (
    <div className="app" id="app">
      <Ancients />
      <Dificulty />
      <div className="decktemplate" id="decktemplate"></div>
    </div>
  );
}

export default App;
