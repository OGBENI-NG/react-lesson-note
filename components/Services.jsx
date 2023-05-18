import React, {useContext} from "react"
import arrowUp from "./asset/arrow-up.png"
import arrowDown from "./asset/arrow-down.png"
import { ThemeContext } from "../useThemeContext"
import useToggler from "../useToggler"


function Services() {
    const [ navMenuOn, toggle ] = useToggler()
    const { theme } = useContext(ThemeContext)
    
    return(
        <div>
            <div 
                onClick={ toggle }                         
                className="about--arrow--container"
            >
                <span>Services</span>
                <img 
                    src={ navMenuOn ? arrowUp : arrowDown } 
                    className="arrow"
                    alt="dropdown--icon"
                />
            </div>
            <div 
                className={`nav-container service-container ${theme}-theme`}
                style={{display: navMenuOn ? 'block' : 'none'}}
            >
                <nav className={`about--nav`}>
                    <ul>
                        <li>bring</li>
                        <li>deliver</li>
                        <li>package</li>
                        <li>express</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Services