import Image from "next/image";
import React from "react";
import Layout from "../components/layout/Layout";

const products = () => {
	return (
		<Layout>
			<div className=" bg-gray-50 w-screen min-h-screen dark:bg-gray-700">
				<div className="container   mr-auto flex flex-wrap items-start">
					<div className="w-full lg:pl-2 mb-4 mt-4">
						<h1 className="text-xl lg:text-4xl text-gray-500 font-bold">
							Best Sellers
						</h1>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 dark:bg-gray-700">
							<figure className="mb-2">
								<Image src="/product/1.jpg" width={350} height={400} />
							</figure>
							<div className="rounded-lg p-4 bg-purple-700 flex flex-col">
								<div>
									<h5 className="text-white text-2xl font-bold leading-none">
										Beyaz Tshirt
									</h5>
									<span className="text-xs text-gray-400 leading-none">
										And then there was Pro.
									</span>
								</div>
								<div className="flex items-center">
									<div className="text-lg text-white font-light">$1099,00</div>
									<button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 stroke-current m-auto"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 dark:bg-gray-700">
							<figure className="mb-2">
								<Image src="/product/2.jpg" width={350} height={400} />
							</figure>
							<div className="rounded-lg p-4 bg-purple-600 flex flex-col">
								<div>
									<h5 className="text-white text-2xl font-bold leading-none">
										Pembe Tshirt
									</h5>
									<span className="text-xs text-gray-400 leading-none">
										Just the right amount of everything.
									</span>
								</div>
								<div className="flex items-center">
									<div className="text-lg text-white font-light">$699,00</div>
									<button className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 stroke-current m-auto"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 dark:bg-gray-700">
							<figure className="mb-2">
								<Image src="/product/3.jpg" width={350} height={400} />
							</figure>
							<div className="rounded-lg p-4 bg-gray-700 flex flex-col">
								<div>
									<h5 className="text-white text-2xl font-bold leading-none">
										Yine Beyaz
									</h5>
									<span className="text-xs text-gray-400 leading-none">
										Brilliant. In every way.
									</span>
								</div>
								<div className="flex items-center">
									<div className="text-lg text-white font-light">$599,00</div>
									<button className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 stroke-current m-auto"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 dark:bg-gray-700">
							<figure className="mb-2">
								<Image src="/product/4.jpg" width={350} height={400} />
							</figure>
							<div className="rounded-lg p-4 bg-gray-600 flex flex-col">
								<div>
									<h5 className="text-white text-2xl font-bold leading-none">
										Siyah
									</h5>
									<span className="text-xs text-gray-400 leading-none">
										Lots to love. Less to spend.
									</span>
								</div>
								<div className="flex items-center">
									<div className="text-lg text-white font-light">$399,00</div>
									<button className="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 stroke-current m-auto"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default products;
