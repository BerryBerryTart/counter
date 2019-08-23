import { combineReducers } from "redux";
import valueReducer from "./valueReducer";
import resetReducer from "./resetReducer"

 const rootReducer = combineReducers({valueReducer, resetReducer});

export default rootReducer;
