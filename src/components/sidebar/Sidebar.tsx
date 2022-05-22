import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../redux/store";

//images
import { TagIcon, HomeIcon, ShoppingBagIcon, UserGroupIcon, ChartBarIcon, GiftIcon, TruckIcon, CogIcon,ChevronDoubleDownIcon } from "@heroicons/react/solid";




const Sidebar = () => {
	const { permissions } = useAppSelector((state: RootState) => state.login);

	console.log("permissions?" , permissions.includes("User_Get"));

	const [showOptions, setShowOptions] = useState(false);
	const [showProducts, setShowProducts] = useState(false);
	const [showOrders, setShowOrders] = useState(false);
	const [showAnalistic, setShowAnalistic] = useState(false);


	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setShowOptions(!showOptions);
	};
	const handleProduct= () => {
    setShowProducts(!showProducts)
	};
	const handleOrders= () => {
    setShowOrders(!showOrders)
	};
	const handleAnalistic= () => {
    setShowAnalistic(!showAnalistic)
	};

	const handleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="w-64 h-screen border-r border-gray-300 shadow mt-5 ml-3 ">
			<div className="px-6 pt-8">
				<div className="flex items-center justify-between">
					<Link href="/about">
						<a className=" rounded flex items-center justify-center mb-2">
							<Image src="/logo.png" width={100} height={100} alt=""/>
						</a>
					</Link>
				</div>
			</div>
			<div className="px-6 pt-4">
				<hr className="border-gray-400" />
			</div>

			<div className="px-6 pt-4">
				<ul className="flex flex-col space-y-2">
					<li className="text-gray-500 relative">
						<div className="absolute inset-y-0 flex items-center">
						<HomeIcon width={24} height={24} />
						</div>
						<Link href="/dashboard">
							<a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-violet-200 focus:ring-2 ">
								Dashboard
							</a>
						</Link>
					</li>


					<li className="text-gray-500 relative" onClick={handleOrders}>
					<div className="text-gray-500 relative flex justify-between active:bg-gray-500 active:text-white hover:bg-gray-400 rounded">
							<div className="flex items-center w-full ">
								<div className="absolute inset-y-0 flex items-center">	
				      	<ShoppingBagIcon width={24} height={24} />

								</div>
								<div className="inline-block text-sm w-full pl-8 pr-4 py-2 cursor-pointer ">
									Orders
								</div>
							</div>
							<button className="absolute right-0 flex items-center py-2 text-gray-400">
								<ChevronDoubleDownIcon width={18} height={18} />
							</button>
						</div>
						{showOrders && (
							<ul className="flex flex-col pl-2 text-gray-500 border-l border-violet-200">
							<Link href="/orders/Orders" passHref>	
							<div>
							<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
							 <a className="cursor-pointer">Siparişler </a>		
								</li> 
							</div>
							</Link>

                <Link href="/orders/Draft" passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Taslaklar </a>
								</li>	
								</Link>
								<Link href="/orders/Abondoned" passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Terkedilmiş Öğeler </a>
								</li>	
								</Link>
							
							
							</ul>
						)}
					</li>



					<li className="" onClick={handleProduct}>
						<div className="text-gray-500 relative flex justify-between active:bg-gray-500 active:text-white hover:bg-gray-400 rounded">
							<div className="flex items-center w-full ">
								<div className="absolute inset-y-0 flex items-center">
								<TagIcon width={24} height={24} />
								</div>
								<div className="inline-block text-sm w-full pl-8 pr-4 py-2 cursor-pointer ">
									Products
								</div>
							</div>
							<button className="absolute right-0 flex items-center py-2 text-gray-400">
								<ChevronDoubleDownIcon width={18} height={18} />
							</button>
						</div>
						{showProducts && (
							<ul className="flex flex-col pl-2 text-gray-500 border-l border-violet-200">
							<Link href="/products/Products"  passHref>	
							<div>
							<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
							 <a className="cursor-pointer">Ürünler </a>		
								</li> 
							</div>
							</Link>

                <Link href="/dashboard"  passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Stok </a>
								</li>	
								</Link>
								<Link href="/dashboard"  passHref>
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Transferler </a>
								</li>	
								</Link>
								<Link href="/dashboard"  passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Koleksiyonlar </a>
								</li>	
								</Link>

								<Link href="/dashboard"  passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
									
									 	<a className="cursor-pointer"> Hediye Kartları </a>
								</li>	
								</Link>
							
							</ul>
						)}
					</li>



					<li className="text-gray-500 relative">
						<div className="absolute inset-y-0 flex items-center">
						<UserGroupIcon width={24} height={24} />

						</div>
						<Link href="/">
							<a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-violet-200 focus:ring-2 ">
								Customers
							</a>
						</Link>
					</li>
					<li className="" onClick={handleAnalistic}>
						<div className="text-gray-500 relative flex justify-between active:bg-gray-500 active:text-white hover:bg-gray-400 rounded">
							<div className="flex items-center w-full ">
								<div className="absolute inset-y-0 flex items-center">
								<ChartBarIcon width={24} height={24} />

								</div>
								<div className="inline-block text-sm w-full pl-8 pr-4 py-2 cursor-pointer ">
									Analistik
								</div>
							</div>
							<button className="absolute right-0  flex items-center py-2 text-gray-400 ">
								<ChevronDoubleDownIcon width={18} height={18} />
								
							</button>
						</div>
						{showAnalistic && (
							<ul className="flex flex-col pl-2 text-gray-500 border-l border-violet-200">
							<Link href="/settings/Permissions"  passHref>	
							<div>
							<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
							 <a className="cursor-pointer">Siparişler  </a>		
								</li> 
							</div>
							</Link>

                <Link href="/settings/Permissions"  passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
								
									
									 	<a className="cursor-pointer"> Faturalar </a>
										
								
								</li>	
								</Link>
								<Link href="/settings/Permissions"  passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
								
									
									 	<a className="cursor-pointer"> İptaller </a>
										
								
								</li>	
								</Link>
							
							</ul>
						)}
					</li>

					<li className="text-gray-500 relative">
						<div className="absolute inset-y-0 flex items-center">
						<GiftIcon width={24} height={24} />

						</div>
						<Link href="/dashboard">
							<a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-violet-200 focus:ring-2 ">
								Discount
							</a>
						</Link>
					</li>

				
        

					<li className="" onClick={handleClick}>
						<div className="text-gray-500 relative flex justify-between active:bg-gray-500 active:text-white hover:bg-gray-400 rounded">
							<div className="flex items-center w-full ">
								<div className="absolute inset-y-0 flex items-center">
								<CogIcon width={24} height={24} />

								</div>
								<div className="inline-block text-sm w-full pl-8 pr-4 py-2 cursor-pointer ">
									Settings
								</div>
							</div>
							<button className="absolute right-0  flex items-center py-2 text-gray-400 ">
								<ChevronDoubleDownIcon width={18} height={18} />
								
							</button>
						</div>
						{showOptions && (
							<ul className="flex flex-col pl-2 text-gray-500 border-l border-violet-200">
							<Link href="/settings/User" passHref >	
							<div>
							<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
							 <a className="cursor-pointer">Users  </a>		
								</li> 
							</div>
							</Link>

                <Link href="/settings/Permissions" passHref >
									<li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-violet-200">
								
									
									 	<a className="cursor-pointer"> User Permissions </a>
										
								
								</li>	
								</Link>
							
							
							</ul>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
