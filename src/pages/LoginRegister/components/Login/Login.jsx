import { useContext, useState } from 'react'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../../../context/UserContext'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const { setUserData, setLogged } = useContext(UserContext)

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchLogin = async data => {
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
      setLoading(true)
      const fetchResponse = await fetch(API_URL, settings)
      const response = await fetchResponse.json()
      if (fetchResponse.status === 200) {
        setUserData(response)
        setLoading(false)
        setLogged(true)
        navigate('/')
        sessionStorage.setItem('todoUserData', JSON.stringify(response))
      }
      if (fetchResponse.status === 401) {
        setLoading(false)
        setErrorMessage(response.error)
      }
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  return (
    <>
      <p className='text-white text-lg font-medium mb-4 animate-pulse first-letter:uppercase'>
        {errorMessage}
      </p>
      <form
        className='login-register__form'
        onSubmit={handleSubmit(fetchLogin)}
      >
        <label htmlFor='username'>
          Username:
          {errors.username && (
            <p className='text-validation'>{errors.username.message}</p>
          )}
          <input
            {...register('username', {
              required: {
                value: true,
                message: 'Username required'
              }
            })}
            autoComplete='username'
          />
        </label>
        <label htmlFor='password'>
          Password:
          {errors.password && (
            <p className="text-validation">{errors.password.message}</p>
          )}
          <input
            type='password'
            {...register('password', {
              required: {
                value: true,
                message: 'Password Required'
              }
            })}
            autoComplete='password'
          />
        </label>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type='submit'
          disabled={loading}
          className='button flex justify-center'
        >
          {loading ? <div className='spinner' /> : 'Enviar'}
        </motion.button>
      </form>
    </>
  )
}

export { Login }
