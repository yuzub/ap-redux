import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "../components/CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../components/Spinner";

class Courses extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     course: {
  //       title: "",
  //     },
  //   };

  //   this.handleChange = this.handleChange.bind(this); // Now the function is only bound once
  // }

  // handleChange(event) {
  //   console.log(this);
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // }

  // state = {
  //   course: {
  //     title: "",
  //   },
  // };

  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // debugger;
  //   // var 1
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //   // var 2
  //   // this.props.createCourse(this.state.course);
  //   // var 3
  //   this.props.actions.createCourse(this.state.course);
  //   // alert(this.state.course.title);
  // };

  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        <Spinner />
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
        {/* {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))} */}
        {/* <form onSubmit={this.handleSubmit}>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save"></input>
        </form> */}
      </>
    );
  }
}

Courses.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  // var 1
  // dispatch: PropTypes.func.isRequired,
  // var 2
  // createCourse: PropTypes.func.isRequired,
  // var 3
  actions: PropTypes.object.isRequired,
};

// function mapStateToProps(state, ownProps) {
function mapStateToProps(state) {
  console.log("%ccourses mapStateToProps()", "color: lightblue");
  console.log("state", state);
  // debugger;

  return {
    // courses: state.courses,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(
    "%ccourses mapDispatchToProps()",
    "color: yellow; background: gray;"
  );
  return {
    // var 2
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    // var 3
    // next line ends up wrapping all of courseActions in a call to dispatch
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

// Connect returns a function. That function then calls our component.
export default connect(mapStateToProps, mapDispatchToProps)(Courses);

// if omit mapStateToProps, component gets a dispatch prop injected automatically
// export default connect(mapStateToProps)(Courses);

// alternative
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(Courses);
