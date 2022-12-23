import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);

  const [searchWord, setSearchWord] = useState("");

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonList={pokemonList} setPokemonList={setPokemonList} />
      <br />
      <Search searchWord={searchWord} setSearchWord={setSearchWord} />
      <br />
      <PokemonCollection
        searchWord={searchWord}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
    </Container>
  );
}

export default PokemonPage;
