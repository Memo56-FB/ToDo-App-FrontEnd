import { useForm } from 'react-hook-form'

const Register = () => {
  const { register, handleSubmit } = useForm()

  const fetchRegister = async (data) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/api/users`
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
      return err
    }
  }
  return (
    <form className='login-register__form' onSubmit={handleSubmit(fetchRegister)}>
      <label htmlFor='name'>
        Name:
        <input {...register('name')} autoComplete='name' />
      </label>
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

export { Register }
