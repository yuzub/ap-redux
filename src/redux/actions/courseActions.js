import * as actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// this function is called the "action creator"
export function createCourse(course) {
  // debugger;
  // this object is an "action"
  //   return { type: "CREATE_COURSE", course: course };
  // the object shorthand syntax
  return { type: actionTypes.CREATE_COURSE, course };
}

// this function is called the "action creator"
export function loadCourseSuccess(courses) {
  console.log("courseActions loadCourseSuccess 2");
  return { type: actionTypes.LOAD_COURSE_SUCCESS, courses };
}

// first thunk
export function loadCourses() {
  console.log("courseActions loadCourses 1");
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
