// store.js
import { createStore, combineReducers } from "redux";
import contactReducer from "./reducers";

const rootReducer = combineReducers({
  contact: contactReducer,
  // Add more reducers if needed
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
