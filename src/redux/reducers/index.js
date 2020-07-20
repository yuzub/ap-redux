import { combineReducers } from "redux";
// import courses from "./courseReducer";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";

const rootReducer = combineReducers({
  //   courses: courses,
  courses: courseReducer,
  authors: authorReducer,
});

export default rootReducer;
