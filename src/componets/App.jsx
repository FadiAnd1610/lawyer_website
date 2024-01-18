import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./About";
import Contant from "./contant";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavScrollExample from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Card from "./Card";

import Tax from "../componets/Big-Subjects/tax";
import CriminalRepresentation from "./Big-Subjects/CriminalRepresentation";
import Minors from "./Big-Subjects/Minors";
import Forgive from "./Big-Subjects/pardons";
import Robery from "./Big-Subjects/robery";
import Dead from "./Big-Subjects/dead";
import Murder from "./Big-Subjects/murder";
import Car from "./Big-Subjects/carAcsident";
import Sex from "./Big-Subjects/sex";
import Violnce from "./Big-Subjects/violnce";
import Partners from "./Big-Subjects/purtners";
import Gun from "./Big-Subjects/gun";
function App() {
  
  let Componet;
  switch (window.location.pathname) {
    
    case "/contant":
      Componet = <Contant />;
      break;
    case "/contact":
      Componet = <Contact />;
      break;
    case "/home":
      Componet = <Home />;
      break;
    case "/about":
      Componet = <About />;
      break;
    case "/adjust":
      Componet = <Card />;
      break;

    default:
      break;
  }

  return (
    <div className="App">
      <NavScrollExample />
      {Componet}

      <Router>
        <Switch>
        <Redirect from="/" to="/home" />
          <Route path="/Team" component={Tax} />
          <Route path="/now" component={CriminalRepresentation} />
          <Route path="/child" component={Minors} />
          <Route path="/robery" component={Robery} />
          <Route path="/pardons" component={Forgive} />
          <Route path="/murder" component={Murder} />
          <Route path="/dead" component={Dead} />
          <Route path="/car" component={Car} />
          <Route path="/sex" component={Sex} />
          <Route path="/violnce" component={Violnce} />
          <Route path="/partners" component={Partners} />
          <Route path="/gun" component={Gun} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
