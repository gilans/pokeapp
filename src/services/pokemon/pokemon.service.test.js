import axios from "axios";

import { POKE_API, POKE_IMAGE_API } from "utils/constants";
import { fetchAllPokemons, fetchPokemon } from ".";

jest.mock("axios");

describe("fetchAllPokemons", () => {
  it("Should fetch with correct url", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: [] } })
    );

    await fetchAllPokemons();
    expect(axios.get).toHaveBeenCalledWith(`${POKE_API}pokemon?limit=151`);
  });

  it("Should fetch successfully data from API", async () => {
    const dataFromApi = {
      data: {
        results: [
          { name: "item1", url: "url/1/" },
          { name: "item2", url: "url-/2/" },
        ],
      },
    };

    const results = [
      { id: "1", name: "item1", imageUrl: `${POKE_IMAGE_API}1.png` },
      { id: "2", name: "item2", imageUrl: `${POKE_IMAGE_API}2.png` },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(dataFromApi));

    await expect(fetchAllPokemons()).resolves.toEqual(results);
  });

  it("Should fetch erroneously data from an API", async () => {
    const errorMessage = "fetch Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchAllPokemons()).rejects.toThrow(errorMessage);
  });
});

describe("fetchPokemon", () => {
  it("Should fetch with correct url", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: [] } })
    );

    await fetchPokemon("1");
    expect(axios.get).toHaveBeenCalledWith(`${POKE_API}pokemon/1`);
  });

  it("Should fetch successfully data from API", async () => {
    const results = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
    ];

    const data = { data: { results } };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchPokemon("1")).resolves.toEqual(data);
  });

  it("Should fetch erroneously data from an API", async () => {
    const errorMessage = "fetch Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchPokemon("1")).rejects.toThrow(errorMessage);
  });
});
