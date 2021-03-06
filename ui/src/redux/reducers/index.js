import { appReducer } from "./app.reducer";
import { combineReducers } from "redux";
import { dataReducer } from "./data.reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  data:dataReducer
});
