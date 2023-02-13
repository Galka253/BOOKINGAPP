import { LIST_OF_HOTELS } from "../actions/actionTypes";

const initState = {
  hotels: [],
};
export const hotelReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_OF_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };

    default:
      return state;
  }
};
