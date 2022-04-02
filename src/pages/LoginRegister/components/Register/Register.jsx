const Register = () => {
  return (
    <form className='login-register__form'>
      <label htmlFor='name'>
        Name:
        <input type='text' name='name' autoComplete='name' />
      </label>
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

export { Register }
