import React from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Navbar from "./Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer1 from './Footer'

const App= () => {
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"></Redirect>
     
     </Switch>
     <Footer1/>
    </>
  );
};
export default App;