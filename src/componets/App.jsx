import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Contant from "./Contant";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
  let Component;

  switch (window.location.pathname) {
    case "/contant":
      Component = <Contant />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
    case "/home":
      Component = <Home />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/adjust":
      Component = <Card />;
      break;
    case "/Team":
      Component = <Tax />;
      break;
    case "/now":
      Component = <CriminalRepresentation />;
      break;
    case "/child":
      Component = <Minors />;
      break;
    case "/robery":
      Component = <Robery />;
      break;
    case "/pardons":
      Component = <Forgive />;
      break;
    case "/murder":
      Component = <Murder />;
      break;
    case "/dead":
      Component = <Dead />;
      break;
    case "/car":
      Component = <Car />;
      break;
    case "/sex":
      Component = <Sex />;
      break;
    case "/violnce":
      Component = <Violnce />;
      break;
    case "/partners":
      Component = <Partners />;
      break;
    case "/gun":
      Component = <Gun />;
      break;
    default:
      Component = <Home />;
      break;
  }

  return (
    <div className="App">
      <NavScrollExample />
      {Component}

      <Router>
        <Switch>
          <Route path="/" exact component={Card} />
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
