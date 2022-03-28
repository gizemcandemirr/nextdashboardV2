import React from "react";

import { useTable, usePagination, useRowSelect } from "react-table";
import Dropdown from "../dropdown/Dropdown";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import ProfilePicture from "../../../public/profile.jpg";
import Image from "next/image";

const renderDotsItem = (item, index) => (
	<div key={index}>
		<a className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2">
			{item}
		</a>
	</div>
);
const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		return (
			<>
				<input type="checkbox" ref={resolvedRef} {...rest} className="mr-3 ml-3" />
			</>
		);
	}
);




function CustomTable({ columns, data, action }) {
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
			initialState: { pageIndex: 2 },
		},
		usePagination,
		useRowSelect,
		
			(hooks) => {
			hooks.visibleColumns.push((columns) => [
				// Let's make a column for selection
				{
					id: "selection",
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div className="flex items-center">
							<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />

						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
					
								<div className="flex items-center mt-2 ">
							<IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
							<Image src={ProfilePicture} width={65} height={65} className="rounded-full" />
						</div>
				
					),
				},
				...columns,
			]);
		}	
		)
	
	

	return (
		<>
			<div className="p-8">
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table
						{...getTableProps()}
						className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
					>
						<thead className="text-md font-semibold text-gray-700 uppercase border-b dark:bg-gray-700 dark:text-gray-400">
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th {...column.getHeaderProps()} className="px-2 py-2">
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
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td {...cell.getCellProps()} className="px-2 py-2 border-b ">{cell.render("Cell")}</td>
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
			</div>
		</>
	);
}

export default CustomTable;