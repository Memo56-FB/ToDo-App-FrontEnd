const Login = () => {
  return (
    <form className='login-register__form'>
      <label htmlFor='username'>
        Username:
        <input type='text' name='username' autoComplete='username' />
      </label>
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          autoComplete='new-password'
        />
      </label>
    </form>
  )
}

export { Login }
