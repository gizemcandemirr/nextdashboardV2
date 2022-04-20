import React from "react";

type TableObject = {
	title: string | null;
	data?: string[];
	props?: any;
};

type TableContent = {
	title?: string;
	props?: any;
};

type Props = {
	title: string;
	headers: TableObject[];
	content: TableContent[][];
};

const BasicTable = (props: Props) => {
	return (
		<div className="border-collapse border border-slate-300  mt-5  bg-white rounded-lg sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="relative overflow-x-auto mt-5  sm:rounded-lg">
				<span className="ml-2 font-semibold mt-5 uppercase">{props.title}</span>
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
					<thead className="text-xs border-b-2 text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr >
							{props.headers?.map((header, index) => (
								<th
									scope="col"	
									{...(header.props ?? {})}
									className={"p-4" + (header.props?.className && header.props?.className)}
									key={index}	>
									{header.title}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{props.content?.map((x,index) => (
							<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700" key={index}>
								{x?.map((y,index) => (
									<th	scope="row" key={index} {...y.props} className={"p-4 font-medium text-gray-900 dark:text-white whitespace-nowrap " + (y.props?.className && y.props?.className)}
									>
										{y.title}
									</th>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BasicTable;
