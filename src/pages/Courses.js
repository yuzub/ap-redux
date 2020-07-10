import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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

  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // debugger;
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    // this.props.createCourse(this.state.course);
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
    // alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  console.log("mapStateToProps()");
  console.log(state);

  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// Connect returns a function. That function then calls our component.
export default connect(mapStateToProps, mapDispatchToProps)(Courses);

// if omit mapStateToProps, component gets a dispatch prop injected automatically
// export default connect(mapStateToProps)(Courses);

// alternative
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(Courses);
