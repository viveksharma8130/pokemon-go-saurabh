import React from "react";
import PokemonCard from "./cards";
const PokemonThumb = (props) => {
  return (
    <>
      <div className="thumb-container">
        <PokemonCard data={props} />
      </div>
    </>
  );
};

export default PokemonThumb;
