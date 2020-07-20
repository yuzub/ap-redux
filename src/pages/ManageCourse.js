// section 1: Imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
// import * as courseActions from "../redux/actions/courseActions";
import { loadCourses } from "../redux/actions/courseActions";
// import * as authorActions from "../redux/actions/authorActions";
import { loadAuthors } from "../redux/actions/authorActions";
import PropTypes from "prop-types";

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

function ManageCourse({ courses, authors, loadAuthors, loadCourses }) {
  // const { courses, authors, loadAuthors, loadCourses } = this.props;
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

// section 3: PropTypes Declaration
ManageCourse.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

// section 4: Redux mappings
function mapStateToProps(state) {
  console.log("%cManageCourse mapStateToProps()", "color: lightblue");
  console.log("state", state);

  return {
    courses: state.courses,
    authors: state.authors,
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
};

// section 5: Redux connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
