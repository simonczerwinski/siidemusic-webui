import React from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import NavBar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MusicList from "./pages/MusicList";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/musiclist" exact component={MusicList} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
