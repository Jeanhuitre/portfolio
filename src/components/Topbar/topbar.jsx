import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo"> Moi. </a>
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+33 6 34 56 46 62</span>
                </div>

                <div className="itemContainer">
                    <Mail className="icon" />
                        <span>lucas.merino@outlook.fr</span>
                </div>
            </div>

            <div className="right">
              <div className="hamburger">
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
 )

  
}
