import React, { useState, useEffect } from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from './hooks/useAxios';
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {

  const { data, error, loading, fetchData, addPokemon } = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  if (loading) {
    return <p> Loading...</p>;
  }

  if (error) {
    return <p> Error: {error.message} </p>;
  }

  console.log("Selected Pokemon:", selectedPokemon);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={(name) => addPokemon(name, setSelectedPokemon)} />
      </div>
      <div className="PokeDex-card-area">
        {selectedPokemon && (
          <PokemonCard
            key={selectedPokemon.id}
            front={selectedPokemon.sprites.front_default}
            back={selectedPokemon.sprites.back_default}
            name={selectedPokemon.name}
            stats={selectedPokemon.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        )}
      </div>
    </div>
  );
}

export default PokeDex;
