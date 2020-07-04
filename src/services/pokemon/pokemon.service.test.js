import axios from "axios";

import { POKE_API } from "utils/constants";
import { fetchAllPokemons } from ".";

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
    const results = [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
    ];

    const data = { data: { results } };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

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
