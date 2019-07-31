import { combineReducers } from "redux";

// Root
import mainReducer from "../../pages/home/Reducer";

// Pages

export default combineReducers({
  main: mainReducer,
});