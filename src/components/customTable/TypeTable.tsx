import React from "react";
import { useTable } from "react-table";
import { IOrder } from "./Types";

type Props = {
	data: IOrder[];
	columns: any;
};

export default function Table(props: Props) {
	const data = props.data;

	const columns = props.columns;

  function tableHooks(hooks) {
	hooks.visibleColumns.push((columns) => [
		...columns,
		{
			id:"Edit",
			Header:"Edit",
			Cell: ({row}) => (
				<button className="uppercase font-bold bg-green-400 w-24 h-8 rounded-full">
					edit
				</button>
			)	}
	])
	}

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data}, tableHooks);

  const isEven = (idx) => idx % 2 ===0 ;

	return (
	
			<table className="table-auto table" {...getTableProps()}>
				<thead className="tableHead">
					{headerGroups.map((headerGroup, i) => (
						<tr className="tableRow" {...headerGroup.getHeaderGroupProps()} key={i} >
							{headerGroup.headers.map((column,i) =>(
							<th className="tableHeader" {...column.getHeaderProps()} key={i}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>

				<tbody className="tableBody" {...getTableBodyProps()}>
					{rows.map((row,i)=>{
						prepareRow(row);

						return( 
					<tr className={isEven(i) ? "bg-green-100 tableRow": "tableRow"} {...row.getRowProps()} key={i} >
						
							{row.cells.map((cell,i)=>(
	           <td className="tableData" key={i}>{cell.render("Cell")}</td>
						))}

				</tr>
				
				)
					})}
					
					
					
				
				</tbody>
			</table>
		
	);
}
