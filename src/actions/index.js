import * as type from "./types";
import Pokedex from "pokedex-promise-v2";

export const fetch_poke_types = () => async (dispatch) => {
  const p = new Pokedex();
  const res = await p.getTypesList();
  dispatch({ type: type.FETCH_POKE_TYPES, payload: res.results });
};

export const select_poke_type = (pokemonType, url) => async (dispatch) => {
  const p = new Pokedex();
  const res = await p.resource(url);
  const pokemonList = { type: pokemonType, pokemonList: res.pokemon };
  dispatch({ type: type.SELECT_POKE_TYPE, payload: pokemonList });
};

export const select_pokemon = (name) => async (dispatch) => {
  const p = new Pokedex();
  const res = await p.getPokemonByName(name);
  console.log(res);
  dispatch({ type: type.SELECT_POKEMON, payload: res.results });
};
