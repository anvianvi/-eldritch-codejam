import "./style.css";
import { ancientsData } from "../../data/ancients";
import { blueCards, brownCards, greenCards } from "../../data/mythicCards";
import ReactDOM from "react-dom";

function getMultipleRandom(
  arr: { id: string; cardFace: string; difficulty: string; color: string }[],
  num: number
) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
export function shafledeck(e: number) {
  return {
    firststage: [
      [...getMultipleRandom(greenCards, ancientsData[e].firstStage.greenCards)],
      [...getMultipleRandom(brownCards, ancientsData[e].firstStage.brownCards)],
      [...getMultipleRandom(blueCards, ancientsData[e].firstStage.blueCards)],
    ],
    secondstage: [
      [
        ...getMultipleRandom(
          greenCards,
          ancientsData[e].secondStage.greenCards
        ),
      ],
      [
        ...getMultipleRandom(
          brownCards,
          ancientsData[e].secondStage.brownCards
        ),
      ],
      [...getMultipleRandom(blueCards, ancientsData[e].secondStage.blueCards)],
    ],
    therdstage: [
      [...getMultipleRandom(greenCards, ancientsData[e].thirdStage.greenCards)],
      [...getMultipleRandom(brownCards, ancientsData[e].thirdStage.brownCards)],
      [...getMultipleRandom(blueCards, ancientsData[e].thirdStage.blueCards)],
    ],
  };
}
let deck = shafledeck(0);

export default function Deck() {
  return (
    <div className="deck-container">
      <div className="current-state">
        <div className="stage-container">
          <div className="stage-heading">First Stage</div>
          <div className="dots-container">
            <div className="dot green">{deck.firststage[0].length}</div>
            <div className="dot brown">{deck.firststage[1].length}</div>
            <div className="dot blue">{deck.firststage[2].length}</div>
          </div>
        </div>
        <div className="stage-container">
          <div className="stage-heading">Second Stage</div>
          <div className="dots-container">
            <div className="dot green">{deck.secondstage[0].length}</div>
            <div className="dot brown">{deck.secondstage[1].length}</div>
            <div className="dot blue">{deck.secondstage[2].length}</div>
          </div>
        </div>
        <div className="stage-container">
          <div className="stage-heading">Third Stage</div>
          <div className="dots-container">
            <div className="dot green">{deck.therdstage[0].length}</div>
            <div className="dot brown">{deck.therdstage[1].length}</div>
            <div className="dot blue">{deck.therdstage[2].length}</div>
          </div>
        </div>
      </div>
      <div className="deck"></div>
      <div className="current-card"></div>
    </div>
  );
}

export function createNewDeck(e: number) {
  deck = shafledeck(e);

  let rootElement = document.getElementById("decktemplate");
  ReactDOM.render(<Deck />, rootElement);
}
