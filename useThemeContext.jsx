import React, { useState, createContext, useEffect } from "react"

const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(() => {
        const storeTheme = localStorage.getItem('theme')
        return storeTheme ? storeTheme : 'light'
    })

    useEffect(() =>{
        localStorage.setItem('theme', theme)
    },[theme])
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export { ThemeContextProvider, ThemeContext }