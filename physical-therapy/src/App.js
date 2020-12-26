import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./Components/Home";
import Services from "./Components/Services";
import Products from "./Components/Products";
import News from "./Components/News";
import More from "./Components/More";
import Navtabs from "./Components/Navtabs";
import About from "./Components/About";
import Title from "./Components/TitleTop"
import "./Components/app.css";


function App() {
  return (
    <Router>
       <div className="App">
         <Title></Title>
      <Navtabs></Navtabs>
      <Route exact path="/Home" component={Home}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/News" component={News}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/More" component={More}/>
    </div>
    </Router>
   
  );
}

export default App;


