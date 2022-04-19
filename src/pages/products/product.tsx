import React from "react";
import makeData from '../../../JsonData/customer-list.json'
import CustomTable from '../../components/customTable/CustomTable'
import TableHeader from "../../components/customTable/TableHeader";
import Layout from '../../components/layout/Layout'



const products = () => {

	
	   const columns = React.useMemo(
    () => [
      {
        Header: 'Stok Kodu',
       column: 'stokKod',	
			 accessor:"stokKod"		
			}
			,
			{
				Header: 'Name',
				column:'name',
				accessor:"name"
		 },
		 {
			Header: 'Durum',
			
			column: 'durum',
			accessor:"durum"
		 },
		 {
			Header: 'Stok',
			column: 'id',
			accessor:"id"
		 },
		 {
			Header: 'Tür',
			column: 'tür',
			accessor:"tür"
		 },
		 {
			Header: 'Satıcı',
			column: 'personSince',
			accessor:"personSince"
		 },
		 

    ],
    []
  )

  const data = React.useMemo(() => makeData, [])
	
	const action = [{"id": 1, type:"View"}, {"id": 2, type:"Delete"}]
  return (
     <Layout title="ProductList">
			 <div>
				 <div className="px-5 py-5 ml-5 mr-5">
					 <TableHeader title="Product List" />
				 </div>

				 <CustomTable columns={columns} data={data} action={action} /> 
			 </div>
		   	 
	    
		 </Layout> 
  )
		
};

export default products;
