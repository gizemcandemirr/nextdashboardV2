import React from "react";
import Charts from "../components/charts/Charts";
import Widgets from "../components/widgets/Widgets";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MainLayout from "../layout/MainLayout/MainLayout";

const dashboard = () => {
	return (
		<MainLayout >
			<div className="w-full h-screen ">

				{/* total sales && chart */}

				<div className="grid grid-cols-3 gap-4 p-4">
					<div>
				
					<div className="mb-5 ">
					 	<Widgets
						title="Lifetime Sales"
						action="rise"
						rate="30"
						content="500"
						img="EarnImg"
					/>

				 </div>
			
					<div className="mb-5">
						<Widgets
						title="Earnings"
						action="decline"
						rate="20"
						content="$100000"
						img="OrderImg"
					/>	
					</div>



					</div>
			
					 <div className="col-span-2">
						<Charts />
					</div>


				</div>


				{/* tables */}
				<div className="flex  p-4">
					{/* last order */}
					<div className="p-4 w mt-5 w-2/5 bg-white rounded-lg sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="relative overflow-x-auto mt-5  sm:rounded-lg">
							<span className="ml-2 font-semibold mt-5 uppercase">
								Last Orders
							</span>
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
								<thead className="text-xs border-b-2 text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-2 py-3">
											Name
										</th>
										<th scope="col" className="px-2 py-3">
											{" "}
											Sales
										</th>
										<th scope="col" className="px-2 py-3">
											Number
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="sr-only">Detail</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Gizem Candemir
										</th>
										<td className="px-2 py-4">5000$</td>
										<td className="px-2 py-4">554 555 55 55</td>
										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Caner
										</th>
										<td className="px-2 py-4">10$</td>
										<td className="px-2 py-4">111 111 11 11</td>

										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* last search terms*/}
					<div className="p-4 mt-5 w-2/3 bg-white rounded-lg sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="relative overflow-x-auto mt-5  sm:rounded-lg">
							<span className="ml-2 font-semibold mt-5 uppercase">
								Last Search Terms
							</span>
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
								<thead className="text-xs border-b-2 text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-2 py-3">
											Search Term
										</th>
										<th scope="col" className="px-2 py-3">
											{" "}
											Results
										</th>
										<th scope="col" className="px-2 py-3">
											Users
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="sr-only">Detail</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Gizem Candemir
										</th>
										<td className="px-2 py-4">5000$</td>
										<td className="px-2 py-4">554 555 55 55</td>
										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Caner
										</th>
										<td className="px-2 py-4">10$</td>
										<td className="px-2 py-4">111 111 11 11</td>

										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
        
				{/* product table */}
				<div className="p-4 mt-5 w-full bg-white rounded-lg sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="relative overflow-x-auto mt-5  sm:rounded-lg">
							<span className="ml-2 font-semibold mt-5 uppercase">
								Last Search Terms
							</span>
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
								<thead className="text-xs border-b-2 text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-2 py-3">
											Search Term
										</th>
										<th scope="col" className="px-2 py-3">
											{" "}
											Results
										</th>
										<th scope="col" className="px-2 py-3">
											Users
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="sr-only">Detail</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Gizem Candemir
										</th>
										<td className="px-2 py-4">5000$</td>
										<td className="px-2 py-4">554 555 55 55</td>
										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
									<tr className="bg-white border-b-2 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											className="px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
										>
											Caner
										</th>
										<td className="px-2 py-4">10$</td>
										<td className="px-2 py-4">111 111 11 11</td>

										<td className="px-6 py-4 text-right">
											<a
												href="#"
												className="font-medium text-gray-600 dark:text-red-400 hover:underline"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth={2}
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
													/>
												</svg>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

			</div>
		</MainLayout>
	);
};

export default dashboard;
