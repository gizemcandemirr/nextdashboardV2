import { DotsVerticalIcon } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import TableHeader from "../../components/customTable/TableHeader";
import Layout from "../../components/layout/Layout";

const Products = ({products}:any) => {
console.log("pro",products)

	const columns = [
		{
			name: "Product Name",
			selector: (row:any)  => row.title,
		},
		{
			name: "Product Category",
			selector: (row:any) => (
				<div
					className={
						row.category === "men's clothing"
							? "status active"
							: row.category === "jewelery"
							? "status draft"
							: "status archived"
					}
				>
				
					<span> {row.category} </span>
				</div>
			),
		},
		{
			name: "Price",
			selector: (row:any)  => row.price
		},
		{
			name: "Description",
			selector: (row:any)  => row.description
		},
		{
			name: "Product Image",
			selector: (row:any)  => (
				<img src={row.image} width={100} height={80} alt="" />
			),
		},
		{
			name: "edit",
			selector: (row:any)  => (
				<Link as="/posts" href={`/products/${row.id}`} >
				<a>
						<DotsVerticalIcon className="h-6 w-6" />
				</a>
			</Link>
			
			),
		},
	];



	return (
		<Layout title="ProductList">
			<div>
				<div className="ml-5 mr-5">
					<TableHeader title="Products" />
				</div>

				<div className="p-5 w-screen-7xl">
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

export default Products;

export async function getServerSideProps(context:any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
    products,
  }}
}