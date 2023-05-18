import React, {useContext} from "react"
import logo from '../components/asset/logo.png'
import About from './About'
import Services from './Services'
import darkIcon from '../components/asset/dark.png'
import lightIcon from '../components/asset/light.png'
import { ThemeContext } from "../useThemeContext"



export default function Header(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return(
        <header className={`${theme}-theme`}>
            <img src={logo} className="logo" alt="logo"/>
            <nav className="header--nav">
                <span>Home</span>
                <About />
                <Services />
                <span>Contacts</span>
            </nav>
                <img 
                    src={theme === 'light' ? darkIcon : lightIcon} 
                    className="toggle-icon"
                    onClick={toggleTheme}
                    alt="toggle-switch"
                />
        </header>
    )
    
}