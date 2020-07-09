import { combineReducers } from "redux";
// import courses from "./courseReducer";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  //   courses: courses,
  courses: courseReducer,
});

export default rootReducer;
