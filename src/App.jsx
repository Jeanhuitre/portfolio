import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/topbar';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import './app.scss';
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false) //initialise les fonctions menuOpen et setMenuOpen, puis on le met dans Topbar
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
