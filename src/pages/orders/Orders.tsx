import { DotsVerticalIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import CustomDropdown from '../../components/dropdown/CustomDropdown';
import Widgets from '../../components/widgets/Widgets';
import MainLayout from '../../layout/MainLayout/MainLayout';



function Orders({products}:any) {


	
	const columns = [
		{
			name: "Product Name",
			selector: (row:any)  => row.title,
		},
		{
			name: "Product Image",
			selector: (row:any)  => (
				<img src={row.image} width={100} height={80} alt="" />
			),
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
	
	];
	
	
	return (
	<MainLayout title="OrderList">
		<div className='p-5'>
			<div className='flex'>
				      <CustomDropdown />
							<Widgets
								title="Siparişler"
								action="decline"
								rate="20"
								content="$100000"
								
							/>
								<Widgets
								title="Sipariş Edilen Ürünler"
								action="decline"
								rate="20"
								content="$100000"
							
							/>
								<Widgets
								title="İade Edilen Ürünler"
								action="decline"
								rate="20"
								content="$100000"
							
							/>
								<Widgets
								title="Yerine Getirelen Siparişler"
								action="decline"
								rate="20"
								content="$100000"
								
							/>
								<Widgets
								title="Yerine Getirme Zamanı"
								action="decline"
								rate="20"
								content="$100000"
								
							/>
						
			</div>
	
					<DataTable columns={columns} data={products} pagination selectableRows fixedHeader />

		</div>
	</MainLayout>	
	)
}

export default Orders

export async function getServerSideProps(context:any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
    products,
  }}
}