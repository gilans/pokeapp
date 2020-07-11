import React from "react";
import PropTypes from "prop-types";

import styles from "./Slide.module.scss";

Slide.propTypes = {};

function Slide({ pokemon }) {
  return (
    <div className={styles["slide__card-container"]} key={pokemon.id}>
      <p className={styles["slide__image-title"]}>{pokemon.name}</p>
      <img
        className={styles.slide__image}
        src={pokemon.imageUrl}
        alt={pokemon.name}
      />
    </div>
  );
}

export default Slide;
