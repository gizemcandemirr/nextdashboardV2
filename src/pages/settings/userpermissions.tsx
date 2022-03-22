import React from "react";
import Layout from "../../components/layout/Layout";

const userpermissions = () => {
	return (
		<Layout>
			<div className="h-screen flex gap-4 pl-2 pr-2 bg-white dark:bg-gray-900">
				<div className="w-full border-b border-gray-200 rounded-xl dark:border-gray-700">
					<div className="flex justify-between p-5 border-b-2 border-gray-200 dark:border-gray-700">
						<div className="flex text-gray-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-24 w-24  pr-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>

							<div className="">
								<p className="text-violet-400 font-bold text-xs">
									{" "}
									Gizem Candemir{" "}
								</p>

								<p className="text-gray-600 font-bold">
									[Front End Developer] Last Seen
								</p>

								<p className="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>

								<p className="text-gray-400"> Beginner developer </p>
							</div>
						</div>

						<div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
							<p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
								Transfer ownership
							</p>
						</div>
					</div>

					<div className="grid grid-cols-6 p-5 gap-y-2 border-b-2 border-gray-200 dark:border-gray-700">
						<div className="col-span-5 md:col-span-5">
							<p className="text-sky-500 font-bold text-xs"> User(0,50) </p>

							<p className="text-gray-600 font-bold mt-5">
								Customize what your staff members can edit and access.
							</p>

							<div className="flex text-purple-200 mt-5 items-center">
								<button className="flex items-center font-bold hover:bg-violet-100 hover:w-32 h-12 rounded  hover:justify-center">
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
							<p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 mr-1 text-sm h-fit">
								Dashboard
							</p>
							<p className="rounded-lg text-green-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
								Invited List
							</p>
						</div>
					</div>

					<div className="grid grid-cols-6 p-5 gap-y-2 border-b-2 border-gray-200 dark:border-gray-700">
						<div className="col-span-5 md:col-span-5 mt-5">
							<p className="text-sky-500 font-bold text-xs">Role(0,50) </p>

							<p className="text-gray-600 font-bold mt-5">
								Customize what your staff members can edit and access.
							</p>

							<div className="flex text-purple-200 mt-5 items-center">
								<button className="flex items-center font-bold hover:bg-violet-100 hover:w-32 h-12 rounded  hover:justify-center">
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
		</Layout>
	);
};

export default userpermissions;
