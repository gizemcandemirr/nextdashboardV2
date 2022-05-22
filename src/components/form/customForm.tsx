import React from "react";
import makeData from '../../../JsonData/customer-list.json'




const Form = (props: any) => {
	
	const DotsContent = ["Engelle/Engeli Kaldır", "Aktivayon Yenile"]
	const resend= true;
	// <span className={!resend? "bg-orange-300 text-orange-500 flex items-center w-20 h-6 justify-center font-bold tex-sm rounded-lg mr-3" : "w-20 mr-3"}>{!resend? "Resend" : null}</span>
	//                      <button className="text-red-400"><BanIcon width={18} /> </button>
const renderDotsItem = (item:any,index:any) =>(
  <div key={index}>
    <a className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2'> {item} </a>
  </div>
)

const data = React.useMemo(() => makeData, [])
const action = ["View", "Edit"]
const columns = React.useMemo(
	() => [
		{
			Header: 'Users',
			columns: [
			
				{
					Header: 'Name',
					accessor: 'name',
				},
				{
					Header: 'Email',
					accessor: 'email',
				},
			
			],
		},
	 
	],
	[]
)
	return (
		<div>
			{props.type == "add" && (
				<div className="px-5 py-5 flex ">
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
										placeholder="example"
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
										placeholder="example"
									/>
								</div>
							</div>
						</div>

						<div className="flex justify-end items-center py-2">
							<button
								className="w-48 rounded-lg text-sky-500 font-bold border-2 border-gray-300 hover:bg-sky-100 py-1 px-3 text-md h-fit"
								type="button"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			)}
			{props.type == "role" && (
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
										placeholder="example"
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
										placeholder="example"
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
												<span className="pl-2">
													Instituion/ShowAll: ListAll
												</span>
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
												<span className="pl-2">
													Instituion/ShowAll: ListAll
												</span>
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

			{props.type == "owner" && (
				<div className="p-4 mt-5 max-w-xxl bg-white border-gray-200 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
					<div className="py-4">
						<div
							className="bg-orange-100 border-t-4 border-orange-500 text-orange-700  px-4 py-3 shadow-md rounded"
							role="alert"
						>
							<div className="flex ">
								<div className="py-1">
									<svg
										className="fill-current h-6 w-6 text-orange-700 mr-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
									</svg>
								</div>
								<div>
									<p className="font-bold">Our privacy policy has changed</p>
									<p className="text-sm">
										Make sure you know how these changes affect you.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex ">
						<article className="prose prose-md">
							<p>
								For years parents have espoused the health benefits of eating
								garlic bread with cheese to their children, with the food
								earning such an iconic status in our culture that kids will
								often dress up as warm, cheesy loaf for Halloween.
							</p>
						</article>
					</div>

					<div className="flex">
						{/* Owner Form */}
						<form className=" w-full max-w-lg">
							<div className="flex mt-5 ">
								<div className="flex flex-wrap -mx-3 mb-6 pr-2">
									<div className=" px-3">
										<label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
											First Name
										</label>
										<input
											className="appearance-none block w-full rounded-lg text-gray-700 border border-gray-400  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="grid-last-name"
											type="text"
										/>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6 pl-2">
									<div className="px-3">
										<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
											Last Name
										</label>
										<input
											className="appearance-none block w-full text-gray-700 border border-gray-400 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											id="grid-last-name"
											type="text"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6 ">
								<div className="w-full px-3">
									<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
										Enter your password to confirm:
									</label>
									<input
										className="appearance-none block w-full text-gray-700 border border-gray-400 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="example"
									/>
								</div>
							</div>

							<div className="flex justify-end items-center  py-2">
								<button
									className="rounded-lg text-sky-500 font-bold border-2 border-gray-300 hover:bg-sky-100 py-1 px-3 text-sm w-fit h-12"
									type="button"
								>
									Completed to Transfer
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{props.type == "invited" && (
				<div>
					<div className="pl-5">
						<article>
							<h3>Invitation E-Mails</h3>
							<p>It includes Users we invite and dont log into the system</p>
						</article>
					</div>
			

				</div>
			)}
		</div>
	);
};

export default Form;
