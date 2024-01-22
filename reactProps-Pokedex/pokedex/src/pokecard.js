import React from 'react';

const Pokecard = ({ id, name, type, base_experience }) => (
  <div className="pokecard-card">
    <h3>{name}</h3>
    <img className= "pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}  alt={name} />
    <div className="pokecard-info">
    <p>Type: {type}</p>
    <hr></hr>
    <p>Base Experience: {base_experience}</p>
    </div>
  </div>
);

export default Pokecard;

