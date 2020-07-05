import React from "react";
import { shallow } from "enzyme";

// eslint-disable-next-line no-unused-vars
import MockedPokemonService from "services/pokemon";
import Home from "./Home";
import HomeCarousel from "./HomeCarousel";

jest.mock("services/pokemon", () => {
  return {
    fetchAllPokemons() {
      return Promise.resolve([{ id: 1, name: "item1" }]);
    },
  };
});

describe("Home", () => {
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    mockUseEffect();
    wrapper = shallow(<Home />);
  });
  it("Should render without problem", () => {
    expect(wrapper.find("main").length).toBe(1);
  });

  it("Should render a HomeCarousel component", () => {
    expect(wrapper.find(HomeCarousel).length).toBe(1);
  });
});
