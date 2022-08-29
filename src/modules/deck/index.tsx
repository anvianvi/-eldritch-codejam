import "./style.css";

export default function Deck() {
  return (
    <div className="deck-container">
      <div className="current-state">
        <div className="stage-container">
          <div className="stage-heading">First Stage</div>
          <div className="dots-container">
            <div className="dot green"></div>
            <div className="dot brown"></div>
            <div className="dot blue"></div>
          </div>
        </div>
        <div className="stage-container">
          <div className="stage-heading">Second Stage</div>
          <div className="dots-container">
            <div className="dot green"></div>
            <div className="dot brown"></div>
            <div className="dot blue"></div>
          </div>
        </div>
        <div className="stage-container">
          <div className="stage-heading">Third Stage</div>
          <div className="dots-container">
            <div className="dot green"></div>
            <div className="dot brown"></div>
            <div className="dot blue"></div>
          </div>
        </div>
      </div>
      <div className="deck"></div>
      <div className="current-card"></div>
    </div>
  );
}