import React, { useMemo } from "react";
import Table from "../../components/customTable/TypeTable";
import TableHeader from "../../components/customTable/TableHeader";
import Layout from '../../components/layout/Layout'
import { IOrder } from "../../components/customTable/Types";


const drafts = () => {

	
	   const columns = React.useMemo(
    () => [
			{
        Header: 'Image',
       column: 'image',	
			 accessor:"image"		
			}
			,
      {
        Header: 'Sipariş No',
       column: 'orderNo',	
			 accessor:"orderNo"		
			}
			,
			{
				Header: 'Sipariş Tarihi',
				column:'orderDate',
				accessor:"orderDate"
		 },
		 {
			Header: 'Müşteri',			
			column: 'customer',
			accessor:"customer"
		 },
		 {
			Header: 'Toplam Sipariş Tutarı',
			column: 'price',
			accessor:"price"
		 },
		 {
			Header: 'Ödeme Durumu',
			column: 'pay',
			accessor:"pay"
		 },
		 {
			Header: 'Sipariş Karşılama Durumu',
			column: 'orderPayStatus',
			accessor:"orderPayStatus"
		 },
		 {
			Header: 'Öğeler',
			column: 'items',
			accessor:"items"
		 },
		 {
			Header: 'Teslimat Yöntemi',
			column: 'payMethod',
			accessor:"payMethod"
		 },
		 {
			Header: 'Etiketleme',
			column: 'tags',
			accessor:"tags"
		 },
		 

    ],
    []
  )	
	
   
				const data = React.useMemo(
					() => [
						{
				"image": "/product/3.jpg",
				"orderNo":1,
		  	"orderDate":"21.02.2020",
				"customer":"anıl",
				"price":56,
				"pay":"string",
				"orderPayStatus":"hazırlanıyor",
				"items":"string",
				"payMethod":"string",
				"tags":"string"
							
						},
						{
							"image": "/product/1.jpg",
							"orderNo":2,
							"orderDate":"21.02.2020",
							"customer":"ali",
							"price":56,
							"pay":"string",
							"orderPayStatus":"gitti",
							"items":"string",
							"payMethod":"string",
							"tags":"string"
										
									},
									{
										"image": "/product/3.jpg",
										"orderNo":3,
										"orderDate":"21.02.2020",
										"customer":"gizo",
										"price":56,
										"pay":"string",
										"orderPayStatus":"gitti",
										"items":"string",
										"payMethod":"string",
										"tags":"string"
													
												},
			
					],
					[]
				)	

  return (
     <Layout title="OrderList">
			 <div className="px-10 py-5">
				 <div className="px-5 py-5 ml-5 mr-5">
					 <TableHeader title="Order List" />
				 </div>

				 <Table columns={columns} data={data} /> 
			 </div>
		   	 
	    
		 </Layout> 
  )
		
};

export default drafts;