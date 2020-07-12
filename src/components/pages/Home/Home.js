import React, { useState } from "react";

import { fetchAllPokemons } from "services/pokemon";
import Carousel from "components/presentational/Carousel";
import styles from "./Home.module.scss";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  React.useEffect(() => {
    fetchAllPokemons().then(setPokemons);
  }, []);

  // TODO: add loading spinner

  const keepLoading = pokemons.length === 0;

  return (
    <main className={styles.home__container}>
      <h1>Pokemon App</h1>
      {!keepLoading && <Carousel pokemons={pokemons} />}
      {keepLoading && <div>Loading ...</div>}
      <footer className={styles.home__footer}>
        <div>
          Iconos diseñados por{" "}
          <a
            href="https://www.flaticon.es/autores/gregor-cresnar"
            title="Gregor Cresnar"
          >
            Gregor Cresnar
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Home;
