import Link from "next/link";
import React from "react";

const Form = (props) => {
	return (
		<div>
			{props.type == "add" ? (
				<div className="px-5 py-5">
					<form className=" w-full max-w-lg">
						<div>
							<p className="text-gray-600 text-sm italic mb-8">
								Give user Access to your store by sending them an invitation..
							</p>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
										Email
									</label>
									<input
										className="appearance-none block w-full rounded-lg text-gray-700 border border-gray-400  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="example@secilstore.com"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
										Confirm
									</label>
									<input
										className="appearance-none block w-full text-gray-700 border border-gray-400 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="example@secilstore.com"
									/>
								</div>
							</div>
						</div>

						<div className="flex items-center flex-end py-2">
							<button
								className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
								type="button"
							>
								Sign Up
							</button>
							<button
								className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
								type="button"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			) : (
				<div className="px-5 py-5">
					<form className=" w-full">
						<div>
							<p className="text-gray-600 text-sm italic mb-8">
								Give role for your users..
							</p>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
										Role Title
									</label>
									<input
										className="appearance-none block w-full rounded-lg text-gray-700 border border-gray-400  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="example@secilstore.com"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
										Assign User
									</label>
									<input
										className="appearance-none block w-full text-gray-700 border border-gray-400 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="example@secilstore.com"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
										Status
									</label>
									<input
										className="appearance-none block w-full text-gray-700 border border-gray-400 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
										Permissions
									</label>
								  <div className="flex">
										 <div className="pr-12 mt-8">
											 <h3>Super Admin</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Add Role</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Edit Role</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Delete Role</span>
											 </div>
											
										 </div>
										
										 <div className="pr-12 mt-8">
											 <h3>OLDUSERS</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Create</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Delete</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Edit</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : ListAll</span>
											 </div>
											
										 </div>
										 <div className="pr-12 mt-8">
											 <h3>Kurum</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/Index</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: Create</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: Delete</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: ListAll</span>
											 </div>
											
										 </div>
									</div>
									<div className="flex">
										 <div className="pr-12 mt-8">
											 <h3>Super Admin</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Add Role</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Edit Role</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Delete Role</span>
											 </div>
											
										 </div>
										
										 <div className="pr-12 mt-8">
											 <h3>OLDUSERS</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Create</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Delete</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : Edit</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Oldusers/Showall : ListAll</span>
											 </div>
											
										 </div>
										 <div className="pr-12 mt-8">
											 <h3>Kurum</h3>
											 <div className="flex items-center mt-4">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/Index</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: Create</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: Delete</span>
											 </div>
											 <div className="flex items-center">
												  <input type="checkbox" className="pr-2" />
													<span className="pl-2">Instituion/ShowAll: ListAll</span>
											 </div>
											
										 </div>
									</div>
								</div>
							</div>

						</div>

						<div className="flex justify-between items-center flex-end py-2">
				  <div>
							<button
								className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
								type="button"
							>
								Delete Role
							</button>
						</div>	
						<div>
							<button
								className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
								type="button"
							>
								Cancel
							</button>	
								<button
								className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
								type="button"
							>
								Save
							</button>
						
						</div>
						
						
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default Form;
