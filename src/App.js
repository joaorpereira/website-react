import React from 'react';
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Products from "./pages/Products/Products"
import Signup from "./pages/Signup/Signup"
import { Navbar, Footer } from "./components/index"
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={Signup}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
