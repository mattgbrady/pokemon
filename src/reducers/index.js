import { combineReducers } from "redux";
import {
  fetch_poke_types,
  select_poke_type,
  select_pokemon,
} from "./pokemonReducer";

export default combineReducers({
  pokemonTypes: fetch_poke_types,
  pokemonSelectedType: select_poke_type,
  pokemonSelected: select_pokemon,
});
