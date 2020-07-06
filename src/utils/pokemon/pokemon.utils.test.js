import { getPokemonsDefaultLimit } from "utils/constants";
import { getPokemons } from ".";
import pokemons from "./pokemonsData.json";

describe("Pokemon Utils", () => {
  it("should return pokemons using default limit", () => {
    const listPokemons = getPokemons(pokemons);

    expect(listPokemons.length).toBe(getPokemonsDefaultLimit);
  });

  it("should return pokemons using offset", () => {
    const listPokemons = getPokemons(pokemons, 2);
    expect(listPokemons[0]).toEqual(pokemons[2]);
    expect(listPokemons.length).toBe(getPokemonsDefaultLimit);
  });

  it("should return values when offset is near to length of list", () => {
    const listPokemons = getPokemons(pokemons, pokemons.length - 3);

    expect(listPokemons.length).toBe(3);
  });

  it("should doesnt return values when offset is >= length of list ", () => {
    const listPokemons = getPokemons(pokemons, pokemons.length);

    expect(listPokemons.length).toBe(0);
  });
});
