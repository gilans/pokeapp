import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

import { getPokemons } from "utils/pokemon";

import styles from "./Carousel.module.scss";
import Slide from "../Slide";

Carousel.propTypes = {};

function Carousel({ pokemons }) {
  const [pokemonList, setPokemonList] = useState([]);

  React.useEffect(() => {
    setPokemonList(getPokemons(pokemons));
  }, [pokemons]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

  return (
    <section className={styles.carousel__container}>
      <Slider {...settings}>
        {pokemonList.map((pokemon) => (
          <Slide pokemon={pokemon} />
        ))}
      </Slider>
    </section>
  );
}

export default Carousel;
