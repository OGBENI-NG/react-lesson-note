import {useState} from 'react'

function useToggler(defaultOnValue = false) {
    const [isToggleOn, setIsToggleOn] = useState(defaultOnValue)
    
    function toggle() {
        setIsToggleOn(prevToggleOn => !prevToggleOn)
    }

    return [isToggleOn, toggle]
}

export default useToggler