import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import { projectsPorfolio, jdrPortfolio, charactersPortfolio } from "../../data";

export default function portfolio () {
  const [selected, setSelected] = useState ("projects");
  const [data, setData] = useState ([]);
  const list = [
    {
      id: "projects",
      title: "Travaux",
    },
    {
      id: "jdr",
      title: "Jeux de rôle",
    },
    {
      id: "characters",
      title: "Personnages",
    }
  ];

  useEffect(()=>{

    switch(selected) {
      case "projects":
        setData(projectsPorfolio);
        break;
        case "jdr":
        setData(jdrPortfolio);
        break;
        case "characters":
        setData(charactersPortfolio);
        break;
        default:
          setData(projectsPorfolio);
    }
  },[selected]);

  return (
  
  <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
        {list.map((item) => (
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
    </ul>
    <div className="container">
      {data.map((d) => (
      <div className="item">
        <img 
        src={d.img} 
        alt="" 
        />
        <h3>{d.title}</h3>
      </div>
      ))}
    </div>
  </div>
  );
}