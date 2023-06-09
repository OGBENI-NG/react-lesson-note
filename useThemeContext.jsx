import React, { useState, createContext, useEffect } from "react"

const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(() => {
        // Retrieve the theme value from local storage or default to 'light'
        const storeTheme = localStorage.getItem('theme')
        return storeTheme ? storeTheme : 'light'
    })

    useEffect(() =>{
         // Save the current theme value to local storage whenever it changes
        localStorage.setItem('theme', theme)
    },[theme])
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return(
        //render props  
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export { ThemeContextProvider, ThemeContext }