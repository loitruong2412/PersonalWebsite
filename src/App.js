import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Photography from './components/Photography.jsx';

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/photography" component={Photography} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
    </Router>
  );
}

export default App;
