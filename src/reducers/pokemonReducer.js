import * as type from "../actions/types";

export const fetch_poke_types = (state = [], action) => {
  switch (action.type) {
    case type.FETCH_POKE_TYPES:
      return action.payload;
    default:
      return state;
  }
};
export const select_poke_type = (state = [], action) => {
  switch (action.type) {
    case type.SELECT_POKE_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export const select_pokemon = (state = [], action) => {
  switch (action.type) {
    case type.SELECT_POKEMON:
      return [...state, action.payload];
    default:
      return state;
  }
};
