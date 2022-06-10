import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./ProductReducer/ProductReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));