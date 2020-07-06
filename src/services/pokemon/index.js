import axios from "axios";

import { POKE_API, POKE_IMAGE_API } from "utils/constants";

function mapPokemonItems(pokemonItems) {
  return pokemonItems.map((pokemonItem) => {
    const { url, name } = pokemonItem;
    const id = url.slice(-2, -1);
    const imageUrl = `${POKE_IMAGE_API}${id}.png`;
    return {
      name,
      id,
      imageUrl,
    };
  });
}

function fetchAllPokemons() {
  return axios.get(`${POKE_API}pokemon?limit=151`).then((response) => {
    return mapPokemonItems(response.data.results);
  });
}

function fetchPokemon(id) {
  return axios.get(`${POKE_API}pokemon/${id}`).then((response) => {
    return response;
  });
}

export { fetchAllPokemons, fetchPokemon };

const pokemonService = {
  fetchAllPokemons,
  fetchPokemon,
};

export default pokemonService;
