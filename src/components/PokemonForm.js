import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemonList, setPokemonList }) {
  const createNewPokemon = (e) => {
    {
      const newPokemon = {
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value,
        },
      };
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokemon),
      })
        .then((resp) => resp.json)
        .then((pokemon) => {
          setPokemonList([...pokemonList, newPokemon]);
        });
    }
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createNewPokemon(e);
          console.log("submitting form");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
