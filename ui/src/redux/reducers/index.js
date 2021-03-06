import { appReducer } from "./app.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  app: appReducer,
});
