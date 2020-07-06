import { getPokemonsDefaultLimit } from "utils/constants";

function getPokemons(pokemonListItems, offset, limit) {
  const startItems = offset || 0;
  const endItems = limit || startItems + getPokemonsDefaultLimit;

  const selectedPokemons = pokemonListItems.slice(startItems, endItems);

  return selectedPokemons;
}

export { getPokemons };

const pokemonUtils = {
  getPokemons,
};

export default pokemonUtils;
