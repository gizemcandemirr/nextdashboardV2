import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import UserProfile from "../../components/profile/UserProfile"

const Post = () => {
  const router = useRouter()
	const [products, setProducts] = useState([]);

  const { pid } = router.query

	const getProduct = async () => {
		try {
			const response = await axios.get(`https://172.16.46.18/products/${pid}`);
			console.log("p",response.data)
			setProducts(response.data)
		} catch (error) {
			console.log(error);
		}
	};
	 useEffect(()=> {
		 getProduct();
	 // eslint-disable-next-line react-hooks/exhaustive-deps
	 },[])
  return <div>
		<UserProfile data={products}  />
	</div>
}

export default Post