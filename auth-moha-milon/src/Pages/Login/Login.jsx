import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context_Provider/AuthProvider";

const Login = () => {

	const { signInUser } = useContext(AuthContext)

	const handleLogin = (e) => {
		e.preventDefault()
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		signInUser(email, password)
			.then(result => {
				console.log(result.user);
			})
			.catch(error => {
				console.error(error);
			})
	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi</p>

				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleLogin} ><div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" placeholder="email" name="email" className="input input-bordered" />
						</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" />
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input className="btn btn-primary" type="submit" value="Submit" />
							</div>
						</form>
						<p>New to Auth user? Please <Link to={"/register"}>
							<button className="btn btn-link">Register</button>
						</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;