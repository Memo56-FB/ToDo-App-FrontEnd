import "./LoginRegister.scss"
import { Header } from "../../components/Header/Header"
import { NavLink } from "react-router-dom"
const LoginRegister = () => {
	let activeStyle = {
		color: "hsl(192, 100%, 67%)"
	}
	const onActive = ({ isActive }) => (isActive ? activeStyle : undefined)
	return (
		<>
			<Header />
			<main className='padding-app flex flex-col w-full  absolute -mt-20 md:-mt-12 lg:-mt-24 2xl:-mt-44'>
				<div className='flex justify-between text-white text-2xl mb-4'>
					<NavLink to={"/register"} style={onActive} >
						Register
					</NavLink>
					<NavLink to={"/login"} style={onActive} >Login</NavLink>
				</div>
				<section className='bg-Very-Dark-Desaturated-Blue text-lg p-4 rounded-md'>
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
				</section>
			</main>
		</>
	)
}

export { LoginRegister }
