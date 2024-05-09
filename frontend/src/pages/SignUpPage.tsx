import { useState } from "react";
import { Link } from "react-router-dom";
import RadioButton from "../components/RadioButton";
import InputField from "../components/InputField";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/user.mutation";
import toast from "react-hot-toast";

const SignUpPage = () => {
	interface SignUpFormState {
		name: string;
		username: string;
		password: string;
		gender: string;
	}

	const [formState, setFormState] = useState<SignUpFormState>({
		name: "",
		username: "",
		password: "",
		gender: "",
	});

	const [signUp, { loading }] = useMutation(SIGN_UP, {
		onCompleted: () => {
			toast.success("Sign up successful!");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		signUp({ variables: formState });
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					label="Name"
					name="name"
					value={formState.name}
					onChange={handleInputChange}
				/>
				<InputField
					label="Username"
					name="username"
					value={formState.username}
					onChange={handleInputChange}
				/>
				<InputField
					label="Password"
					name="password"
					type="password"
					value={formState.password}
					onChange={handleInputChange}
				/>
				<RadioButton
					label="Gender"
					name="gender"
					options={["Male", "Female", "Other"]}
					value={formState.gender}
					onChange={handleInputChange}
				/>
				<button type="submit" disabled={loading}>
					Sign Up
				</button>
			</form>
			<p>
				Already have an account? <Link to="/login">Log in</Link>
			</p>
		</div>
	);
};

export default SignUpPage;
