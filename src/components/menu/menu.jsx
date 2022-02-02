import "./menu.scss";

export default function menu({menuOpen, setMenuOpen}) {
  return (<div className={"menu " + (menuOpen && "active")}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#intro">Accueil</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#portfolio">portfolio</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#works">Travaux</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
      </ul>
  </div>)
}
