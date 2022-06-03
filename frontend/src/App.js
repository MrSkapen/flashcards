import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Flashcards from "./containers/Flashcards/Flashcards";
import Users from "./containers/Users/Users";
import Login from "./containers/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import Register from "./containers/Register/Register";
import Flashcard from "./containers/Flashcard/Flashcard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/flashcards">Flashcards</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/users">Teacher</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/flashcards/:courseID" component={Flashcard} />
          <Route path="/flashcards" component={Flashcards} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
