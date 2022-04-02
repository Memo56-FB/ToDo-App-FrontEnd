import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()

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
      console.log(await fetchResponse.json())
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
