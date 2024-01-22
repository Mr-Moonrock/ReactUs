import React from 'react';
import {Pokedex, pokemonData} from './pokedex'

const Pokegame = ({ pokemonData }) => {
  const shuffleDeck = (array) => {
    const shuffledDeck = [...array];
    for(let i= shuffledDeck.length-1; i>=0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
  }
  const shuffledPokemon = shuffleDeck(pokemonData);
  const hand1 = shuffledPokemon.slice(0, 4);
  const hand2 = shuffledPokemon.slice(4);

  const calculateTotalExperience = (hand) => {
    return hand.reduce((total, pokemon) => total + pokemon.base_experience, 0);
  };

  const totalExpHand1 = calculateTotalExperience(hand1)
  const totalExpHand2 = calculateTotalExperience(hand2)

  const winner = totalExpHand1 > totalExpHand2 ? 1 : 2;

  return (
    <div className="pokegame">
      <div className="hand">
        <Pokedex hand={hand1} totalExperience={totalExpHand1} winner={winner === 1} />
      </div>
      <div className="hand">
        <Pokedex hand={hand2} totalExperience={totalExpHand2} winner={winner === 2} />
      </div>
    </div>
  );
};


export default Pokegame;