import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './Board.css';

// Import manually each image (directly, explicitly easy and reliable!)
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';
import cat6 from '../assets/cat6.png';
import cat7 from '../assets/cat7.png';
import cat8 from '../assets/cat8.png';
import cat9 from '../assets/cat9.png';
import cat10 from '../assets/cat10.png';
import cat11 from '../assets/cat11.png';
import cat12 from '../assets/cat12.png';
import cat13 from '../assets/cat13.png';
import cat14 from '../assets/cat14.png'; 
// Add more if more images exist

const cardsData = [
  { id: 1, image: cat1 },
  { id: 2, image: cat1 },
  { id: 3, image: cat2 },
  { id: 4, image: cat2 },
  { id: 5, image: cat3 },
  { id: 6, image: cat3 },
  { id: 7, image: cat4 },
  { id: 8, image: cat4 },
  { id: 9, image: cat5 },
  { id: 10, image: cat5 },
  { id: 11, image: cat6 },
  { id: 12, image: cat6 },
  { id: 13, image: cat7 },
  { id: 14, image: cat7 },
  { id: 15, image: cat8 },
  { id: 16, image: cat8 },
  { id: 17, image: cat9 },
  { id: 18, image: cat9 },
  { id: 19, image: cat10 },
  { id: 20, image: cat10 },
  { id: 21, image: cat11 },
  { id: 22, image: cat11 },
  { id: 23, image: cat12 },
  { id: 24, image: cat12 },
  { id: 25, image: cat13 },
  { id: 26, image: cat13 },
  { id: 27, image: cat14 },
  { id: 28, image: cat14 },
];

const shuffleCards = (cardsArray) => {
  return [...cardsArray].sort(() => Math.random() - 0.5);
};

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(shuffleCards(cardsData));
  }, []);

  const handleClick = (card) => {
    if (flipped.length === 2 || flipped.includes(card) || matched.includes(card)) return;

    setFlipped(prev => [...prev, card]);

    if (flipped.length === 1) {
      if (flipped[0].image === card.image) {
        setMatched(prev => [...prev, card, flipped[0]]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          flipped={flipped.includes(card) || matched.includes(card)}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;