// section 1: Imports
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import * as courseActions from "../redux/actions/courseActions";
import { loadCourses, saveCourse } from "../redux/actions/courseActions";
// import * as authorActions from "../redux/actions/authorActions";
import { loadAuthors } from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "../components/CourseForm";
import { newCourse } from "../../tools/mockData";
import Spinner from "../components/Spinner";

// section 2: Class Component Declaration
// class ManageCourse extends Component {
//   componentDidMount() {
//     const { courses, authors, loadAuthors, loadCourses } = this.props;
//     if (courses.length === 0) {
//       loadCourses().catch((error) => {
//         alert("Loading courses failed" + error);
//       });
//     }

//     if (authors.length === 0) {
//       loadAuthors().catch((error) => {
//         alert("Loading authors failed" + error);
//       });
//     }
//   }

//   render() {
//     return (
//       <>
//         <h2>Manage Course</h2>
//       </>
//     );
//   }
// }

function ManageCourse({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history, // React Router's history
  ...props
}) {
  // const { courses, authors, loadAuthors, loadCourses } = this.props;
  const [course, setCourse] = useState({ ...props.course });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("%cManageCourse useEffect()", "color: orange");
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course }); // This will copy the course passed in on props to state anytime a new course is passed in
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]); // run any time that a new course is passed in on props

  function handleChange(event) {
    console.log(`handleChange() - ${event.target.name}`);
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses"); // Reacr Router's history
    }); // this is passed in on props, so it's already bound to dispatch
    //  and the bound saveCourse on props takes precedence over the unbound saveCourse thunk at the top of file
  }

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

// section 3: PropTypes Declaration
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  console.log(`getCourseBySlug()`);
  console.log(courses);

  return courses.find((course) => course.slug === slug) || null;
}

// section 4: Redux mappings
function mapStateToProps(state, ownProps) {
  console.log("%cManageCourse mapStateToProps()", "color: lightblue");
  console.log("state", state);

  const slug = ownProps.match.params.slug;
  // debugger;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  return {
    // course: newCourse, // React plain state
    // course: course, // React plain state
    course, // React plain state
    courses: state.courses, // Redux state
    authors: state.authors, // Redux state
  };
}

// the object form of mapDispatchToProps
const mapDispatchToProps = {
  //   loadCourses: courseActions.loadCourses,
  //   loadCourses: loadCourses,
  loadCourses,
  //   loadAuthors: authorActions.loadAuthors,
  //   loadAuthors: loadAuthors,
  loadAuthors,
  saveCourse,
};

// section 5: Redux connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
