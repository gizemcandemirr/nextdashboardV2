import React, { useState } from "react";
import Form from "../../components/form/customForm";
import Layout from "../../components/layout/Layout";

const userpermissions = () => {
	const [addUser, setAddUser] = useState(false)
	const [addRole, setAddRole] = useState(false)
	const [type,setType] =useState('')

  const addNewUser = () => {
    setAddUser(!addUser);
		setType("add");
	}
	const addNewRole = () => {
    setAddRole(!addRole);
		setType("role");
	}

	return (
		<Layout>

	   {!addUser && !addRole ? 
			<div className="h-screen flex gap-4 pl-2 pr-2 bg-white dark:bg-gray-900">
				<div className="w-full  rounded-xl dark:border-gray-700">
					<div className="flex justify-between rounded p-5 border-2 mb-5 border-gray-200 dark:border-gray-700 ">
						<div className="flex text-gray-500 ">
						<div className="pr-5">
						<span className="text-gray-600 font-bold">Store Owner</span>
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
						</div>	

							<div className="mt-5 pl-5">
								<p className="text-sky-500 font-bold text-xs">
								
									Gizem Candemir
								</p>

								<p className="text-gray-600 font-bold">
									[Front End Developer] Last Seen
								</p>

								<p className="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>

								<p className="text-gray-400"> Beginner developer </p>
							</div>
						</div>

						<div className="flex  ml-4 items-center mb-5 md:col-start-auto md:ml-0 md:justify-end">
							<p className="rounded-lg text-sky-500 font-bold border-2 border-gray-300 hover:bg-sky-100 py-1 px-3 text-sm w-fit h-fit">
								Transfer ownership
							</p>
						</div>
					</div>

					<div className="p-5 rounded border-2 mb-5 border-gray-300 dark:border-gray-700 ">
						<div className="col-span-5 md:col-span-5">
							<p className="text-sky-500 font-bold text-xs"> User(0,50) </p>

							<p className="text-gray-600 font-bold mt-5">
								Customize what your staff members can edit and access.
							</p>

							<div className="flex text-purple-200 mt-5 items-center">
								<button className="flex items-center font-bold h-12 hover:bg-gray-200 w-32 pl-5"
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
							<p className="rounded-lg text-green-500 font-bold border-2 border-gray-300 hover:bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
								Invited List
							</p>
						</div>
					</div>

					<div className="p-5 rounded border-2 border-gray-200 dark:border-gray-700">
						<div className="col-span-5 md:col-span-5 mt-5">
							<p className="text-sky-500 font-bold text-xs">Role(0,50) </p>

							<p className="text-gray-600 font-bold mt-5">
								Customize what your staff members can edit and access.
							</p>

							<div className="flex text-purple-200 mt-5 items-center">
								<button className="flex items-center font-bold h-12 hover:bg-gray-200 w-32 pl-5"
								 onClick={addNewRole}>
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
	

		:
		 <div className="p-5 ">
			  <button onClick={type === "add" ? ()=> setAddUser(!addUser) : ()=> setAddRole(!addRole) } className="flex">
					
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /> 
	
</svg> <span className="text-bold tex-md pl-5">{type === "add" ? "Add User" : "Add Role"}  </span> </button>
				<Form type={type} /> 
		 </div>
	 }

		</Layout>
	

	
	);
};

export default userpermissions;
