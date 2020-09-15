import React from 'react';
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import { Navbar, Footer } from "./components/index"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
