import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './DeckOfCards.css'

const DeckOfCards = () => {

  const [ cards, setCards ] = useState([]);
  const [ img, setImg ] = useState(null);
  const [ deckId, setDeckId ] = useState(null);
  const [ isShuffling, setIsShuffling ] = useState(false);

  
  async function drawCard() {

    if (!deckId) {
      const newDeckRes = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      console.log(newDeckRes.data.deck_id)
      setDeckId(newDeckRes.data.deck_id)
    } else {
      const drawRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      const cardData = drawRes.data.cards[0];
      
      setCards(prevCards => [...prevCards, cardData])
      setImg(cardData.image)
      console.log(cardData)

      if (drawRes.data.remaining === 0) {
        alert('Error: no cards remaining')
      }
    }
  }

  async function shuffleDeck() {
    if (deckId) {
      setIsShuffling(true);
      await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      setCards([]);
      setImg(null);
      setIsShuffling(false);
      alert('Deck has been shuffled');
    } else {
      alert('No deck to be shuffled. Please draw a card first.');
    }
  }

  useEffect(() => {
    if (!deckId) {
    drawCard()
    }
  }, [deckId])
    
  return (
    <div>
      <h1 className='DeckOfCards-Heading'> Deck of Cards  </h1>
      <button 
        className='DeckOfCards-Draw-Btn' 
        onClick={drawCard}> Hit Me! 
      </button> 
      <button 
        className='DeckOfCards-Shuffle-Btn' 
        onClick={shuffleDeck} 
        disabled={isShuffling}> Shuffle
      </button>
      <div className='DeckOfCards-Display'>
        {cards.map((card, idx) => (
          <img 
            key={idx} 
            className='DeckOfCards-Img' 
            src={card.image} 
            alt={`Card ${idx + 1}`} 
            style={{ 
              transform: `rotate(${Math.random() * 90 - 10}deg)`,
              // transform: `rotate(${idx === cards.length - 1 ? Math.random() * 50 - 30 : 5}deg)`,
              marginLeft: `-${idx * 2}px`, 
              marginTop: `-${idx * 2}px`

             }}
          />
        ))}
      </div>
    </div>
  )
};

export default DeckOfCards;