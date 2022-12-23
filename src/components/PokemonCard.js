import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id, name, hp, sprites} = pokemon
  const [isFlipped, setIsFlipped] = useState(true)

const flipCard = ()=>{
  setIsFlipped(!isFlipped)
  console.log("flip")
}

  return (
    <Card
      onClick={() => {
        flipCard();
      }}
    >
      <div>
        <div className="image">
          {isFlipped ? (
            <img alt="oh no!" src={sprites.front} />
          ) : (
            <img alt="oh no!" src={sprites.back} />
          )}

        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
