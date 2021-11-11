import React from 'react';
import logo from './login.png';
import useForm from './useForm';

function SignupForm({ submitForm }) {
	const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);
	return (
		<div>
			<div className="header">
				<h2>Create Account</h2>
				<div>
					<img src={logo} alt="logo" />
				</div>
			</div>
			<div>
				<form>
					<div className="name">
						<label className="label">Full Name</label>
						{errors.fullname && <p className="error">{errors.fullname}</p>}
						<input
							className="input"
							type="text"
							name="fullname"
							value={values.fullname}
							onChange={handleChange}
						/>
					</div>
					<div className="email">
						<label className="label">Email</label>
						{errors.email && <p className="error">{errors.email}</p>}
						<input
							className="input"
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</div>
					<div className="password">
						<label className="label">Password</label>
						{errors.password && <p className="error">{errors.password}</p>}
						<input
							className="input"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
						/>
					</div>
					<div>
						<button className="submit" onClick={handleFormSubmit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignupForm;
