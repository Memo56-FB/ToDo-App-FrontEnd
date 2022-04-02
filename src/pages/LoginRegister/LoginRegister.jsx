import './LoginRegister.scss'
import { NavLink, useLocation } from 'react-router-dom'

import { Header } from '../../components/Header/Header'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
const LoginRegister = () => {
  const location = useLocation()

  const activeStyle = {
    color: 'hsl(192, 100%, 67%)'
  }
  const onActive = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <Header />
      <main className='padding-app flex flex-col w-full  absolute -mt-20 md:-mt-12 lg:-mt-24 2xl:-mt-44'>
        <div className='flex justify-between text-white text-2xl mb-4'>
          <NavLink to={'/register'} style={onActive} >
            Register
          </NavLink>
          <NavLink to={'/login'} style={onActive} >Login</NavLink>
        </div>
        <section className='bg-Very-Dark-Desaturated-Blue text-lg p-4 rounded-md'>
          {
            location.pathname === '/register' && <Register />
          }
          {
            location.pathname === '/login' && <Login />
          }

        </section>
      </main>
    </>
  )
}

export { LoginRegister }
