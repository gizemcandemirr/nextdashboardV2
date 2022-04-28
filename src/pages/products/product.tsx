import { DotsVerticalIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import TableHeader from "../../components/customTable/TableHeader";
import Layout from "../../components/layout/Layout";

const products = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const response = await axios.get("https://172.16.46.18/products");
			setProducts(response.data.products);
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		{
			name: "Product Name",
			selector: (row) => row.name,
		},
		{
			name: "Product description",
			selector: (row) => (
				<div
					className={
						row.status === "active"
							? "status active"
							: row.status === "draft"
							? "status draft"
							: "status archived"
					}
				>
				
					<span> {row.status} </span>
				</div>
			),
		},
		{
			name: "Stok",
			selector: (row) => row.stok
		},
		{
			name: "Tür",
			selector: (row) => row.type
		},
		{
			name: "Satıcı",
			selector: (row) => row.sales
		},
		{
			name: "Product Image",
			selector: (row) => (
				<img src={row.images[0].fileUrl} width={100} height={80} />
			),
		},
		{
			name: "edit",
			selector: (row) => (
				<Link as="/posts" href={`/products/${row.id}`} >
				<a>
						<DotsVerticalIcon className="h-6 w-6" />
				</a>
			</Link>
			
			),
		},
	];

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Layout title="ProductList">
			<div>
				<div className="px-5 py-5 ml-5 mr-5">
					<TableHeader title="Products" />
				</div>

				<div className="p-5">
					<DataTable
						columns={columns}
						data={products}
						pagination
						selectableRows
						fixedHeader
					/>
				</div>
			</div>
		</Layout>
	);
};

export default products;
