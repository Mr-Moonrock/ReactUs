import React, { useState } from "react";
import { v4 as uuid} from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios.js";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  const { data, error, loading, fetchData } = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")

  if (loading) {
    return <p> Loading...</p>;
  }

  if (error) {
    return <p> Error: {error.message} </p>;
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={fetchData}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map((cardData) => (
          <PlayingCard 
            key={cardData.id} 
            front={cardData.cards[0].image}
          />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
