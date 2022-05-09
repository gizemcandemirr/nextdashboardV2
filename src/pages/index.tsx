import type { NextPage } from "next";

import { useDispatch} from "react-redux";
import { RootState, useAppSelector } from "../redux/store";

import { actions as loginActions, reducer as loginReducer } from "../redux/modules/loginSlice";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";




function IndexPage(props: any) {
  
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();



	const { isLoading, isAuth, result } = useAppSelector(
		(state: RootState) => state.login
	);

	const dispatch = useDispatch();

	const { fetch } = loginActions;


	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("boş bırakma");
		}
		try {
			dispatch(fetch({ email: email, password: password }));
		} catch {
			alert("değerler yanlış");
		}
	};

	useEffect(() => {
		if (isAuth == true) {
		
			router.push("/dashboard");
		}
	});



	return (

		<div>
			{
				<div className="h-screen flex bg-gray-bg1">
					<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
						<h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
							Log in to your account 🔐
						</h1>
						{result === "hata" && (
							<span className="text-sm  text-red-400 mt-4 mb-12 text-center">
								Değerleri yanlış girdiniz! Lütfen kontrol ediniz...
							</span>
						)}

						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
									id="email"
									placeholder="Your Email"
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
								/>
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
									id="password"
									placeholder="Your Password"
									value={password}
									onChange={(e) => setPassword(e.currentTarget.value)}
								/>
							</div>

							<div className="flex justify-center items-center mt-6">
								<button
									className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
								>
									Login
									{isLoading && console.log("is loading:", isLoading)}
									{isAuth && console.log("is Auth:", isAuth)}
								</button>
							</div>
						</form>
					</div>
				</div>
			}
		</div>
	);
};

export default IndexPage;
