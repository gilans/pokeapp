import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Slider from "react-slick";

import { getPokemons } from "utils/pokemon";
import { ReactComponent as PrevArrow } from "assets/icons/prev-arrow.svg";
import { ReactComponent as NextArrow } from "assets/icons/next-arrow.svg";
import styles from "./Carousel.module.scss";
import Slide from "../Slide";

const classnames = classNames.bind(styles);

Carousel.propTypes = {};

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Carousel({ pokemons }) {
  const [pokemonList, setPokemonList] = useState([]);
  const sliderRef = React.useRef(null);

  const slickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const slickNext = () => {
    sliderRef.current.slickNext();
  };

  React.useEffect(() => {
    setPokemonList(getPokemons(pokemons));
  }, [pokemons]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,
    ref: sliderRef,
  };

  const prevArrowClass = classnames("carousel__arrow", "carousel__prev-arrow");
  const nextArrowClass = classnames("carousel__arrow", "carousel__next-arrow");

  return (
    <section className={styles.carousel__container}>
      <div className={styles.carousel__slider}>
        <Slider {...settings}>
          {pokemonList.map((pokemon) => (
            <Slide key={pokemon.id} pokemon={pokemon} />
          ))}
        </Slider>
      </div>
      <button onClick={slickPrev} className={prevArrowClass} type="button">
        <PrevArrow />
      </button>
      <button onClick={slickNext} className={nextArrowClass} type="button">
        <NextArrow />
      </button>
    </section>
  );
}

export default Carousel;
