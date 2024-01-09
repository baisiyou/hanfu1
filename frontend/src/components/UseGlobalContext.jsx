import React from 'react'
import { createContext, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    
    return (
        <AppContext.Provider value={{showMenu, setShowMenu}}>
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(AppContext)
}
