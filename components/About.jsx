import React, { useContext } from "react"
import arrowUp from "./asset/arrow-up.png"
import arrowDown from "./asset/arrow-down.png"
import { ThemeContext } from "../useThemeContext"
import useToggler from "../useToggler"

function About() {
    const [ navMenuOn, toggle ] = useToggler()
    const {theme} = useContext(ThemeContext)
    return(
        <div>
            <div 
                onClick={toggle}
                className="about--arrow--container"
            >
                <span>About</span>
                <img 
                    src={ navMenuOn ? arrowUp : arrowDown } 
                    className="arrow"
                    alt="dropdown--icon"
                />
            </div>
            <div 
                className={`nav-container ${theme}-theme`}
                style={{display: navMenuOn ? 'block' : 'none'}}
            >
                <nav className="about--nav">
                    <ul>
                        <li>company</li>
                        <li>careers</li>
                        <li>team</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default About