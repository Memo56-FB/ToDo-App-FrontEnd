import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [logged, setLogged] = useState(false)
  return (
    <UserContext.Provider value={{ userData, setUserData, logged, setLogged }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
