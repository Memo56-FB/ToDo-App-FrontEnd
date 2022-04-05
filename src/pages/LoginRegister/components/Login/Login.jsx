import { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../../../context/UserContext'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { setUserData, setLogged } = useContext(UserContext)

  const fetchLogin = async (data) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/login`
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    try {
      const fetchResponse = await fetch(API_URL, settings)
      const response = await fetchResponse.json()
      if (fetchResponse.status === 200) {
        setUserData(response)
        setLogged(true)
        navigate('/todos')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className='login-register__form' onSubmit={handleSubmit(fetchLogin)}>
      <label htmlFor='username'>
        Username:
        <input {...register('username')} autoComplete='username' />
      </label>
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          {...register('password')}
          autoComplete='new-password'
        />
      </label>
      <button type="submit" className='button'>
        Enviar
      </button>
    </form>
  )
}

export { Login }
