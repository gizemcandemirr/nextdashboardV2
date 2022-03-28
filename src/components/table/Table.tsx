import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import TableContent from "./TableContent";

const Table = props => {
 
	 const header = props.header
	 const content= props.content

	return (
	<>
	
	<div className="flex justify-between mt-8">
		
  <div></div>
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

   <TableContent headData={header} bodyData={content} />	
	 </>

	);
};

export default Table;
