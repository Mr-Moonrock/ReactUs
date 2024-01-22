import React from 'react';
import Pokegame from './pokegame';
import ReactDOM from 'react-dom';
import {pokemonData, Pokedex} from './pokedex';
import './pokecard.css'

const App = () => {
  console.log(Pokedex); // Use curly braces for the function body
  return (
    <div>
      <h1> Pokemon Game</h1>
      <Pokegame pokemonData={pokemonData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
