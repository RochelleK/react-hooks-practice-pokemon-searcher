import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ searchWord, pokemonList, setPokemonList }) {
  const searchList = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  useEffect(() => {
    renderPokemons();
  }, []);

  const renderPokemons = () => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((pokemons) => {
        setPokemonList(pokemons);
      });
  };

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {searchList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
