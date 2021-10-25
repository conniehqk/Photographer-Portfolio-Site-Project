import { useEffect, useState } from "react";
import Navbarr from "./Navbarr";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  
  return (
    <div className="App">
      <Navbarr />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
