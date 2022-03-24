import React from "react";
const TableContent = (props: any) => {
	const bodyData = props.bodyData;
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					{props.headData && (
						<tr>
							{props.headData.map((item, index) => (
								<th key={index} scope="col" className="px-6 py-3">
									{item}
								</th>
							))}
						</tr>
					)}
				</thead>
				{props.bodyData ? (
					<tbody>
						{bodyData
							.filter((content: any) =>
								content.Name.toLowerCase().includes(props.query)
							)
							.map((item, index) => (
								<tr key={index} className="border-b border-gray-200">
									<td className="px-6 py-4">{item.ID}</td>
									<td className="px-6 py-4">{item.Name}</td>
									<td className="px-6 py-4">{item.Role}</td>
									<td className="px-6 py-4">{item.Email}</td>
									<td className="px-6 py-4">{item.Phone}</td>
									<td className="px-6 py-4">{item.Personsince}</td>
									<td className="px-6 py-4">{item.Lastupdate}</td>
									<td
										className={
											item.Status == "Active"
												? "text-green-600 font-bold px-6 py-4"
												: "text-red-600 font-bold px-6 py-4"
										}
									>
										{item.Status}
									</td>
									<td className="px-6 py-4">{item.Action}</td>
								</tr>
							))}
					</tbody>
				) : null}
			</table>
		</div>
	);
};

export default TableContent;
