import { authReducer } from "./reducers/authReducer";
import { hotelReducer } from "./reducers/hotelReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
const reducer = combineReducers({ authReducer, hotelReducer });
export const store = createStore(authReducer, applyMiddleware(thunk));
