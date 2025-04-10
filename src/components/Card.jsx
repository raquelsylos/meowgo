import React from "react";
import "./Card.css";

const Card = ({ card, flipped, onClick }) => {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => onClick(card)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={card.image} alt="Cat Card Front" />
        </div>

        <div className="card-back">🐾</div>
      </div>
    </div>
  );
};

export default Card;
