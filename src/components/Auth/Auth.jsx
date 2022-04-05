import { useContext } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

const Auth = () => {
  const { logged } = useContext(UserContext)
  const location = useLocation()

  if (logged) return <Outlet />
  return <Navigate to='/login' state={{ from: location }} />
}

export { Auth }
