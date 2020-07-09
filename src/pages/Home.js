import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>OXYGEN Courses Administration</h1>
    <p>Manage courses.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default Home;
