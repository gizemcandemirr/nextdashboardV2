import React, { forwardRef, useEffect, useRef, useState } from "react";

import { useTable, usePagination, useRowSelect } from "react-table";
import Dropdown from "../dropdown/Dropdown";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { BackspaceIcon } from "@heroicons/react/solid";
import UserProfile from "../profile/UserProfile";

import ProfilePicture from "../../../public/profile.jpg";
import Image from "next/image";


const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = useRef();
	const resolvedRef = ref || defaultRef;

	useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return (
		<input type="checkbox" ref={resolvedRef} {...rest} className="mr-3 ml-3" />
	);
});

function OrderTable({ columns, data, action, img }) {
	const [isVisible, setIsVisible] = useState(true);
	const [type, setType] = useState("");
	const handleOpen = (type: any) => {
		{
			type == "View" && setType("View");
		}
		{
			type == "Edit" && setType("Edit");
		}
		if (Object.keys(selectedRowIds).length == 1) {
			setIsVisible(!isVisible);
		} else alert("lütfen bir seçim yapınız.");
	};
	const renderDotsItem = (item, index) => (
		<div key={index}>
			<button
				className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 cursor-pointer"
				onClick={() => handleOpen(item.type)}
			>
				{item.type}
			</button>
		</div>
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		page,
		selectedFlatRows,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize, selectedRowIds },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		usePagination,
		useRowSelect,

		(hooks) => {
			hooks.visibleColumns.push((columns) => [
				{
					id: "selection",
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div className="mb-2">
							<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
						
						</div>
					),

					Cell: ({ row }) => (
						<div className="flex items-center  ">
							<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
						</div>
					),
				},
				...columns,
			]);
		}
	);

	return (
		<div className="p-8">
			{isVisible === true ? (
				<>
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table
							{...getTableProps()}
							className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
						>
							<thead className="text-md font-semibold text-gray-900 uppercase border-b dark:bg-gray-700 dark:text-gray-400">
								{headerGroups.map((headerGroup,i) => (
									<tr {...headerGroup.getHeaderGroupProps()} key={i}>
										{headerGroup.headers.map((column,i) => (
											<th className="px-2 py-2 border-b-2 border-gray-300"{...column.getHeaderProps()} key={i}>
												{column.render("Header")}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()} >
								{page.map((row, i) => {
									prepareRow(row);
									return (
										<tr {...row.getRowProps()	} key={i}>
										
											{row.cells.map((cell) => {
												return (
												
													<td className="px-2 py-2 border-b"
														{...cell.getCellProps((cellInfo: any) => ({
															style: {
																color:
																	cell.column.column === "status" &&
																	(cell.row.original.status == "active"
																		? "#55ce81"
																		: "#e98b38"),
                                fontSize: cell.column.column === "status" && "18px",
															},
														}))}
														key={i}
													>
													 	{cell.render("Cell")}
														
													</td>
												);
											})}
											<td className="px-2 py-2 border-b ">
												<Dropdown
													Img={<DotsVerticalIcon width={24} />}
													contentData={action}
													renderItems={(item, index) =>
														renderDotsItem(item, index)
													}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>

					<div className="flex justify-end p-5">
						<button
							onClick={() => gotoPage(0)}
							disabled={!canPreviousPage}
							className="mr-2 hover:bg-gray-200 rounded-full w-8 h-8"
						>
							{"<<"}
						</button>
						<button
							onClick={() => previousPage()}
							disabled={!canPreviousPage}
							className="mr-2 hover:bg-gray-200 rounded-full w-8 h-8"
						>
							{"<"}
						</button>

						<span className="mr-3 ml-3">
							Page
							<strong className="ml-2">
								{pageIndex + 1} of {pageOptions.length}
							</strong>
						</span>
						<button
							onClick={() => nextPage()}
							disabled={!canNextPage}
							className="mr-2 hover:bg-gray-200 rounded-full w-8 h-8"
						>
							{">"}
						</button>
						<button
							onClick={() => gotoPage(pageCount - 1)}
							disabled={!canNextPage}
							className="mr-2 hover:bg-gray-200 rounded-full w-8 h-8"
						>
							{">>"}
						</button>

						<span className="ml-2 mr-2 rounded-full">
							Go to page :
							<input
								type="number"
								defaultValue={pageIndex + 1}
								onChange={(e) => {
									const page = e.target.value ? Number(e.target.value) - 1 : 0;
									gotoPage(page);
								}}
								className="border border-gray-400 rounded-full pl-3 w-20 ml-3"
							/>
						</span>

						<select
							className="border border-gray-400 rounded-full pl-3 w-20  "
							value={pageSize}
							onChange={(e) => {
								setPageSize(Number(e.target.value));
							}}
						>
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<option key={pageSize} value={pageSize}>
									Show {pageSize}
								</option>
							))}
						</select>
					</div>
				</>
			) : (
				<div className="p-15">
					{Object.keys(selectedRowIds).length < 2 &&
						selectedFlatRows.map((d: any) => (
							<div key={selectedRowIds.key}>
								<button onClick={() => setIsVisible(!isVisible)}>
									<div className="flex items-center">
										<BackspaceIcon width={32} height={32} className="pr-2" />{" "}
										<span>Geri </span>{" "}
									</div>
								</button>

								<UserProfile
									name={d.original.name}
									role={d.original.role}
									email={d.original.email}
									phone={d.original.phone}
									type={type}
									img={ProfilePicture}
								/>
							</div>
						))}
				</div>
			)}
		</div>
	);
}

export default OrderTable;
