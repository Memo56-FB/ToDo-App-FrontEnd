import { useContext, useEffect } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

const Auth = () => {
  const { logged, setLogged, setUserData } = useContext(UserContext)
  const location = useLocation()
  const sessionStorageData = sessionStorage.getItem('todoUserData')
  useEffect(() => {
    if (sessionStorageData) {
      setUserData(JSON.parse(sessionStorageData))
      setLogged(true)
    }
  }, [])
  if (!logged && !sessionStorageData) return <Navigate to='/login' state={{ from: location }} />

  return <Outlet />
}

export { Auth }
