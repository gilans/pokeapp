import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPokemons } from "utils/pokemon";

import "./HomeCarousel.scss";

HomeCarousel.propTypes = {};

function HomeCarousel({ pokemons }) {
  const [pokemonList, setPokemonList] = useState([]);

  React.useEffect(() => {
    setPokemonList(getPokemons(pokemons));
  }, [pokemons]);

  return (
    <section>
      {pokemonList.map((pokemon) => {
        return (
          <div className="home-carousel__card-container" key={pokemon.id}>
            <p className="home-carousel__image-title">{pokemon.name}</p>
            <img
              className="home-carousel__image"
              src={pokemon.imageUrl}
              alt={pokemon.name}
            />
          </div>
        );
      })}
    </section>
  );
}

export default HomeCarousel;
