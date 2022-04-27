import { DotsVerticalIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import MainLayout from '../../layout/MainLayout/MainLayout';



function abondonedPayment() {
	const [products, setProducts] =useState([]);


	const getProducts = async () => {
		try {
			const response= await axios.get("https://172.16.46.18/products");
				setProducts(response.data.products)		
		} catch (error) {
			console.log(error);	
		}
	}

	
	const columns =[
		{
			name:"Product Name",
      selector: row => row.name
		},
		{
			name:"Product description",
      selector: row => row.description,
			conditionalCellStyles: [
				{
						when: row => row.description === "asdasd",
						style: {
								backgroundColor: 'rgba(63, 195, 128, 0.9)',
								color: 'white',
								'&:hover': {
										cursor: 'pointer',
								},
						},
				},
	
		],
},

		{
			name:"Product Image",
      selector: row => <img src={row.images[0].fileUrl} width={100} height={80} />		
		},
		{
			name:"edit",
			selector: row => <button>
			<DotsVerticalIcon className="h-6 w-6" />
		</button>
		}
	
	]

	
	
	useEffect(() => {
		getProducts();
	}, []);

	
	return (
	<MainLayout title="OrderList">
		<div className='p-5'>
	    	<DataTable columns={columns} data={products} pagination selectableRows fixedHeader />
		</div>
	</MainLayout>	
	)
}

export default abondonedPayment