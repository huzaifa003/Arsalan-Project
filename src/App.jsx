import React, { useState } from 'react'
import Home from './Pages/Home'
import './index.css'
const App = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className={`${darkMode ? 'dark' : ''} ds`}>
            <div className={`${darkMode ? 'bg-gradient-to-r from-cyan-700 to-blue-700' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} `}>
                <Home darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
        </div>
    )
}

export default App