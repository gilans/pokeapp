import React, { useState } from "react";

import "./Home.scss";
import { fetchAllPokemons } from "services/pokemon";
import HomeCarousel from "./HomeCarousel";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  React.useEffect(() => {
    fetchAllPokemons().then(setPokemons);
  }, []);

  // TODO: add loading spinner

  const keepLoading = pokemons.length === 0;

  return (
    <main className="home__container">
      <h1>Pokemon App</h1>
      {!keepLoading && <HomeCarousel pokemons={pokemons} />}
      {keepLoading && <div>Loading ...</div>}
    </main>
  );
}

export default Home;
