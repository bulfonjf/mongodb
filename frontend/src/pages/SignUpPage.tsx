// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { SIGN_UP } from "../graphql/mutations/user.mutation";
// import toast from "react-hot-toast";	

const SignUpPage = () => {

	// interface SignUpFormState {
	// 	name: string;
	// 	username: string;
	// 	password: string;
	// 	gender: string;
	// }

	// const [signUpData, _] = useState<SignUpFormState>({
	// 	name: "",
	// 	username: "",
	// 	password: "",
	// 	gender: "",
	// });

	// const [signup, { loading }] = useMutation(SIGN_UP, {
	// 	refetchQueries: ["GetAuthenticatedUser"],
	// });

	const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			console.log("Sign Up");
		} catch (error: any) {
			console.error("Error handleOnClick:", error);
		}
	};

	// const handleSubmit = async (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	try {
	// 		await signup({
	// 			variables: {
	// 				input: signUpData,
	// 			},
	// 		});
	// 	} catch (error: any) {
	// 		console.error("Error:", error);
	// 		toast.error(error.message);
	// 	}
	// };

	// const handleChange = (e) => {
	// 	const { name, value, type } = e.target;

	// 	if (type === "radio") {
	// 		setSignUpData((prevData) => ({
	// 			...prevData,
	// 			gender: value,
	// 		}));
	// 	} else {
	// 		setSignUpData((prevData) => ({
	// 			...prevData,
	// 			[name]: value,
	// 		}));
	// 	}
	// };

	return (
		
		<button
					type='button'
					className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={handleOnClick}
				>
					"Sign Up"
					
				</button>
						
	);
};

export default SignUpPage;