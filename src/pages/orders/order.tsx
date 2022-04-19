import React from "react";
import makeData from '../../../JsonData/customer-list.json'
import OrderTable from "../../components/customTable/OrderTable";
import TableHeader from "../../components/customTable/TableHeader";
import Layout from '../../components/layout/Layout'



const orders = () => {

	
	   const columns = React.useMemo(
    () => [
			{
        Header: 'Ürün',
       column: 'img',	
			 accessor:"img"		
			}
			,
      {
        Header: 'Sipariş No',
       column: 'stokKod',	
			 accessor:"stokKod"		
			}
			,
			{
				Header: 'Sipariş Tarihi',
				column:'name',
				accessor:"name"
		 },
		 {
			Header: 'Müşteri',			
			column: 'durum',
			accessor:"durum"
		 },
		 {
			Header: 'Toplam Sipariş Tutarı',
			column: 'lastUpdate',
			accessor:"lastUpdate"
		 },
		 {
			Header: 'Ödeme Durumu',
			column: 'tür',
			accessor:"tür"
		 },
		 {
			Header: 'Sipariş Karşılama Durumu',
			column: 'phone',
			accessor:"phone"
		 },
		 {
			Header: 'Öğeler',
			column: 'id',
			accessor:"id"
		 },
		 {
			Header: 'Teslimat Yöntemi',
			column: 'status',
			accessor:"status"
		 },
		 {
			Header: 'Etiketleme',
			column: 'role',
			accessor:"role"
		 },
		 

    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
	const img= data.map(d=> d.img)
		console.log("data", img);

	const action = [{"id": 1, type:"View"}, {"id": 2, type:"Delete"}]
  return (
     <Layout title="OrderList">
			 <div>
				 <div className="px-5 py-5 ml-5 mr-5">
					 <TableHeader title="Order List" />
				 </div>

				 <OrderTable columns={columns} data={data} action={action} img={img} /> 
			 </div>
		   	 
	    
		 </Layout> 
  )
		
};

export default orders;
