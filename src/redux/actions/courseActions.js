import * as actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// this function is called the "action creator"
// export function createCourse(course) {
//   // debugger;
//   // this object is an "action"
//   //   return { type: "CREATE_COURSE", course: course };
//   // the object shorthand syntax
//   return { type: actionTypes.CREATE_COURSE, course };
// }

// this function is called the "action creator"
export function loadCourseSuccess(courses) {
  console.log("courseActions loadCourseSuccess 2");
  return { type: actionTypes.LOAD_COURSE_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
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

// second thunk
export function saveCourse(course) {
  console.log("courseActions saveCourse 1");
  // eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
