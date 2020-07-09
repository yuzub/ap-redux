// this function is called the "action creator"
export function createCourse(course) {
  // this object is an "action"
  //   return { type: "CREATE_COURSE", course: course };
  // the object shorthand syntax
  return { type: "CREATE_COURSE", course };
}
