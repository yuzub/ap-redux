import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  console.log("courseReducer");
  let newState;
  switch (action.type) {
    // case actionTypes.CREATE_COURSE:
    case actionTypes.CREATE_COURSE_SUCCESS:
      // debugger;
      // state.push(action.course); // this mutates state
      // spread operator to clone state and clone the course passed in
      newState = [...state, { ...action.course }];
      console.log(newState);
      return newState;
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionTypes.LOAD_COURSE_SUCCESS:
      console.log("LOAD_COURSE_SUCCESS");
      console.log(action.courses);
      return action.courses;
    // important to always declare a default on a Redux reducer
    default:
      return state;
  }
}

// Each reducer handles a "slice" of state (a portion of the entire Redux store)

// alternative - array or object
// example in Array
// const coursesArray = [
//   { id: "id1", title: "Course 1" },
//   { id: "id2", title: "Course 2" },
// ];
// coursesArray.find((c) => c.id === "id2");

// example in Object By Id
// const coursesObject = {
//   id1: { id: "id1", title: "Course 1" },
//   id2: { id: "id2", title: "Course 2" },
// };
// coursesObject["id2"];

//  for more information https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
