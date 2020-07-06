import React from "react";
import { shallow } from "enzyme";

import { POKE_IMAGE_API } from "utils/constants";
import MockedPokemonService from "utils/pokemon";
import HomeCarousel from "./HomeCarousel";

// eslint-disable-next-line no-unused-vars

jest.mock("utils/pokemon", () => {
  return {
    getPokemons() {
      const pokeApiUrl = "https://pokeres.bastionbot.org/images/pokemon/";
      return [
        { id: "1", name: "item1", imageUrl: `${pokeApiUrl}1.png` },
        { id: "2", name: "item2", imageUrl: `${pokeApiUrl}2.png` },
      ];
    },
  };
});

describe("HomeCarousel", () => {
  let wrapper;
  let useEffect;

  const pokemons = [
    { id: "1", name: "item1", imageUrl: `${POKE_IMAGE_API}1.png` },
    { id: "2", name: "item2", imageUrl: `${POKE_IMAGE_API}2.png` },
  ];

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    wrapper = shallow(<HomeCarousel pokemons={pokemons} />);
  });

  it("should render without crashing", () => {
    expect(wrapper.find("section").length).toBe(1);
    expect(
      wrapper.find(".home-carousel__card-container").length
    ).toBeGreaterThan(0);
  });
});
