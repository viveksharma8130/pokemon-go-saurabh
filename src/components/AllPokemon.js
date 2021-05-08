import React, { useEffect, useState } from "react";
import PokemonThumb from "./PokemonThumb";
import Searchbar from "./searchbar";

const AllPokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
        console.log(allPokemons);
      });
    }
    createPokemonObject(data.results);
  };
  const searchFilter = allPokemons.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getAllPokemons();
  }, [search]);
  return (
    <>
      <Searchbar filter={setSearch} form={true} />
      <div className="app-contaner">
        <div className="pokemon-container">
          <div className="all-container">
            {searchFilter.map((item, index) => (
              <PokemonThumb
                key={index}
                id={item.id}
                image={item.sprites.other.dream_world.front_default}
                image_front={item.sprites.front_shiny}
                name={item.name}
                type={item.types[0].type.name}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default AllPokemon;
