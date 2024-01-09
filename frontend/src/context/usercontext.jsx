import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const {
        isAuthenticated,
        logout,
        user,
        isLoading,
        loginWithRedirect,
        } = useAuth0()
    
        const [myUser, setMyUser] = useState(null)
    
    React.useEffect(() => {
        if (isAuthenticated) {
            setMyUser(user)
        } else {
            setMyUser(false)
        }

    }, [isAuthenticated])

  return (
      <UserContext.Provider value={{loginWithRedirect, isAuthenticated, myUser, logout, isLoading}}>
          {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
    return React.useContext(UserContext)
}