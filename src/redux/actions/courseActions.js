import * as actionTypes from "./actionTypes";

// this function is called the "action creator"
export function createCourse(course) {
  //   debugger;
  // this object is an "action"
  //   return { type: "CREATE_COURSE", course: course };
  // the object shorthand syntax
  return { type: actionTypes.CREATE_COURSE, course };
}
