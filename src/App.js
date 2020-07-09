import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}
