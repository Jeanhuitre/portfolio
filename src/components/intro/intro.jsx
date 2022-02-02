import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro () {
  const textRef = useRef(); //Variable permettant d'utiliser ityped pour l'animation des span
  
    useEffect(() => { //permet d'utiliser ityped et animer du texte
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Développeur", "Web Designer", "Game Designer", "Character Designer"],
      });
    }, []);

  return (
  
  <div className="intro" id="intro">
    <div className="left">
      <div className="imageContainer">
        <img src="assets/testimg.png" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Bonjour, je me présente</h2>
        <h1>MERINO Lucas</h1>
        <h3>Étudiant <span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  </div>

  )
}
