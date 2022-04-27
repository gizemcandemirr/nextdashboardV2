import Image from "next/image";
import React from "react";

const UserProfile = (props: any) => {
   
	const data = props.data
	// const image = data.images[0].fileUrl
	// console.log("image", image)
	return (
				<>
					<div className="flex space-x-10 mt-10 shadow border-1 border-gray-200 items-center p-12">
						<div>
							{/* <Image
								src={image}
								width={200}
								height={250}
								className="rounded-xl"
							/> */}
						</div>
						<div>
							<div className="flex border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 mb-8">Image : </span>
								<input type="file" />
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Name: </span>
								<input
									type="text"
									placeholder={data.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Phone: </span>
								<input
									type="text"
							
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Adress: </span>
								<input
									type="text"
									placeholder={data.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Email: </span>
								<input
									type="text"
					
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Phone: </span>
								<input
									type="text"
							
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 ">Department: </span>
								<input
									type="text"
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Roles: </span>
								<input
									type="text"
								
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-10 p-12">
						<button className="bg-red-300 h-12 w-32 text-red-700 font-semibold rounded-lg p-3 mt-5">
							Delete User
						</button>
						<button className="bg-blue-300 h-12 w-32 text-blue-700 font-semibold rounded-lg p-3 mt-5">
							Save
						</button>
					</div>
				</>
			) 

};

export default UserProfile;
