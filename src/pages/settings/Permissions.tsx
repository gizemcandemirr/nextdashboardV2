import React, { useState } from "react";
import Form from "../../components/form/customForm";
import Layout from "../../components/layout/Layout";

const Permissions = () => {
	const [visible, setVisible] = useState(false);
	const [type, setType] = useState("");

	const addNewUser = () => {
		setVisible(!visible);
		setType("add");
	};
	const addNewRole = () => {
		setVisible(!visible);
		setType("role");
	};
	const changeStoreOwner = () => {
		setVisible(!visible);
		setType("owner");
	};
	const getInvitedList = () => {
		setVisible(!visible);
		setType("invited");
	};

	return (
		<Layout>
			{!visible ? (
				<div className=" flex p-6 bg-white dark:bg-gray-900">
					<div className="w-full p-4 rounded-xl dark:border-gray-700">
						<div className="flex justify-between rounded p-5 border-2 mb-5 border-gray-200 dark:border-gray-700 ">
							<div className="flex text-gray-500 ">
								<div className="pr-5">
									<span className="text-gray-500 font-bold">Store Owner</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-12 w-12 ml-5 mt-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>

								<div className="mt-5 pl-5">
									<p className="text-sky-500 font-bold text-xs">
										Gizem Candemir
									</p>

									<p className="text-gray-600 font-bold">
										[Front End Developer] Last Seen
									</p>

									<p className="text-gray-400">
									
										Sat, Mar 12 . 7:00 - 8:30 AM
									</p>

									<p className="text-gray-400"> Developer </p>
								</div>
							</div>

							<div className="flex  ml-4 items-center mb-5 md:col-start-auto md:ml-0 md:justify-end">
								<button
									className="rounded-lg text-sky-500 font-bold border-2 border-gray-300 hover:bg-sky-100 py-1 px-3 text-sm w-fit h-fit"
									onClick={changeStoreOwner}
								>
									Transfer ownership
								</button>
							</div>
						</div>

						<div className="p-5 rounded border-2 mb-5 border-gray-300 dark:border-gray-700 ">
							<div className="col-span-5 md:col-span-5">
								<p className="text-sky-500 font-bold text-xs"> User(0,50) </p>

								<p className="text-gray-600 font-bold mt-5">
									Customize what your staff members can edit and access.
								</p>

								<div className="flex text-purple-200 mt-5 items-center">
									<button
										className="flex items-center font-bold h-12 hover:bg-gray-200 w-32 pl-5"
										onClick={addNewUser}
									>
										<div className="flex items-center ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 4v16m8-8H4"
												/>
											</svg>
											<span>Add User </span>
										</div>
									</button>
								</div>
							</div>

							<div className="flex col-start-2 md:col-start-auto md:ml-0 md:justify-end">
								<p className="rounded-lg text-sky-500  border-2 border-gray-300 hover:bg-sky-100 font-bold  py-1 px-3 mr-1 text-sm h-fit">
									Dashboard
								</p>
								<button
									className="rounded-lg text-green-500 font-bold border-2 border-gray-300 hover:bg-sky-100  py-1 px-3 text-sm w-fit h-fit"
									onClick={getInvitedList}
								>
									Invited List
								</button>
							</div>
						</div>

						<div className="p-5 rounded border-2 border-gray-200 dark:border-gray-700">
							<div className="col-span-5 md:col-span-5 mt-5">
								<p className="text-sky-500 font-bold text-xs">Role(0,50) </p>

								<p className="text-gray-600 font-bold mt-5">
									Customize what your staff members can edit and access.
								</p>

								<div className="flex text-purple-200 mt-5 items-center">
									<button
										className="flex items-center font-bold h-12 hover:bg-gray-200 w-32 pl-5"
										onClick={addNewRole}
									>
										<div className="flex items-center ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 4v16m8-8H4"
												/>
											</svg>
											<span>Add Role </span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className=" mt-5 bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700">
					<div className="flex justify-between">
						<button onClick={() => setVisible(!visible)} className="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							<span className="text-bold tex-md pl-5">
								{type === "add" && "Add User"}
								{type === "role" && "Add Role"}
								{type === "owner" && "Transfer Store Owner"}
								{type === "invited" && "Invited List"}
							</span>
						</button>
						<button
							className="text-red-600 pr-8"
							onClick={() => setVisible(!visible)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<Form type={type} />
				</div>
			)}
		</Layout>
	);
};

export default Permissions;
