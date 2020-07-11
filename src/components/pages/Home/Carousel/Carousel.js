import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPokemons } from "utils/pokemon";

import styles from "./Carousel.module.scss";

Carousel.propTypes = {};

function Carousel({ pokemons }) {
  const [pokemonList, setPokemonList] = useState([]);

  React.useEffect(() => {
    setPokemonList(getPokemons(pokemons));
  }, [pokemons]);

  return (
    <section>
      {pokemonList.map((pokemon) => {
        return (
          <div className={styles["carousel__card-container"]} key={pokemon.id}>
            <p className={styles["carousel__image-title"]}>{pokemon.name}</p>
            <img
              className={styles.carousel__image}
              src={pokemon.imageUrl}
              alt={pokemon.name}
            />
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
