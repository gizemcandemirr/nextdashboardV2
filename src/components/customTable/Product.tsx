import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { useTable } from 'react-table';

const Product = () => {
  
	const [products, setProducts]= useState([]);
	const [isLoading, setLoading] = useState(false)
	useEffect(() => {
    setLoading(true)
		const fetchProducts = async () => {
			const response = await axios
				.get("https://fakestoreapi.com/products")
				.catch((err) => console.log(err));
			if (response) {
				const products = response.data;	
				console.log("Products: ", products);
				setProducts(products);
			}
		};
    
		fetchProducts()
  }, [])
	const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Title",
        accessor: "title",
      },
    ],
    []
  );


  const productsData = useMemo(() => [...products], [products]);

  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              if (key === "image")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => <img src={value} />,
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [products]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <button className='tableButton' onClick={() => alert("Editing: " + row.values.price)}>
            Edit
          </button>
        ),
      },
    ]);
  };

	const tableInstance = useTable(
    {
    columns: productsColumns,
      data: productsData,
    },
    tableHooks,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = tableInstance;
	
	
  const isEven = (idx) => idx % 2 === 0;

	return (
		<>
		
		<table className='table' {...getTableProps()}>
			<tr className="tableHead">
				{headerGroups.map((headerGroup,i) => (
					<tbody className='tableRow' {...headerGroup.getHeaderGroupProps()} key={i}>
						{headerGroup.headers.map((column,i) => (
							<th className='tableHeader'
								{...column.getHeaderProps()} key={i}
							>
								{column.render("Header")}
							</th>
						))}
					</tbody>
				))}
			</tr>

		</table>
	</>
	)
}


export default Product

