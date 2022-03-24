import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import TableContent from "./TableContent";

const Table = props => {
 
	const [query,setQuery] = useState("");
	 const header = props.header
	 const content= props.content

	return (
	<>
	
	<div className="flex justify-between mt-8">
			<div className="p-4">
				<label className="sr-only">Search</label>
				<div className="relative ">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="text"
						id="table-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for Name"
					  onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</div>

			<div className="p-4 flex mr-4 ">
				<div className="mr-4">
					<Dropdown header="Filter" />
				</div>
				<div className="flex">
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
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg>
					<span>Export</span>
				</div>
			</div>
		</div>

   <TableContent headData={header} bodyData={content} query={query}/>	
	 </>

	);
};

export default Table;
