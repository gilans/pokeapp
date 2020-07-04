import axios from "axios";

import { POKE_API } from "utils/constants";

function fetchAllPokemons() {
  return axios.get(`${POKE_API}pokemon?limit=151`).then((response) => {
    return response.data.results;
  });
}

// eslint-disable-next-line import/prefer-default-export
export { fetchAllPokemons };
