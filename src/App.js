import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ConnectedCourses from "./pages/Courses";
import ManageCourse from "./pages/ManageCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./pages/Newsletter";
import { ThemeProvider } from "styled-components";

const theme = {
  header: {
    fg: "#ff598a",
  },
  input: {
    color: "#fff",
    background: "#070222",
    textAlign: "center",
  },
  inputFocus: {
    outline: "2px solid #5e9fff",
  },
};

export default function App() {
  return (
    <div className="container-fluid">
      <Header />

      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={ConnectedCourses} />
          <Route exact path="/course/:slug" component={ManageCourse} />
          <Route exact path="/course" component={ManageCourse} />
          <Route exact path="/news-letter" component={Newsletter} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}
