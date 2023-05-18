import React, {useState, useEffect, useReducer} from 'react'

import SideNav from 'remoteSideNav/SideNav'
import GrassN from 'grassN/GrassN'
import Header from "remoteHeader/Header"

const Wrapper = () => {
   
    const [language, setLanguage] = useState('en')
    useEffect (() => {
        const handleClick = (e) => {
            if(e.target?.innerText === 'en' || e.target?.innerText === 'de') {
                setLanguage(e.target.innerText)
            }
        }
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
        }, []
    )

    return (
        <>
        <Header language={language} />
        <div className="flex gap-8">
        <SideNav />
        <GrassN />
      </div>
        </>
    )
}

export default Wrapper