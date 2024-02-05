import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

function useAxios(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setData((prevData) => [...prevData, { ...res.data, id: uuid() }]); 
    } catch (error) {
    console.error('Error fetching data', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addPokemon = async ( name, setSelectedPokemon ) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);

      const pokemonData = res.data;

      if (pokemonData) {
        setSelectedPokemon(pokemonData)
      } else {
        console.error('Unexpected API response:', pokemonData);
      }
      } catch (error) {
        console.error('Error fetching Pokemon:', error.message)
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, error, loading, fetchData, addPokemon };
}  

export default useAxios;

//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };