import React from "react";
import Charts from "../components/charts/Charts";
import Layout from "../components/layout/Layout";
import Widgets from "../components/widgets/Widgets";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dashboard = () => {
	return (
		<Layout>
			<div className="w-full h-screen ">
				<div className="grid grid-cols-4 gap-4 p-4">
					<Widgets
						title="Users"
						action="decline"
						rate="50"
						content="100"
						img="UserImg"
					/>
					<Widgets
						title="Orders"
						action="rise"
						rate="30"
						content="500"
						img="OrderImg"
					/>
					<Widgets
						title="Earnings"
						action="decline"
						rate="20"
						content="$100000"
						img="EarnImg"
					/>
					<Widgets
						title="Balance"
						action="rise"
						rate="10"
						content="$500000"
						img="BalanceImg"
					/>
				</div>

				<div className="grid grid-cols-3 gap-4 p-4">
					<div className=" max-w-md bg-white ml-4 p-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
						<div className="flex justify-between">
							<span className="text-gray-500">Total Revenue</span>
							<button>
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
										d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
									/>
								</svg>
							</button>
						</div>
						<div className="flex justify-center mt-5">
							<div className="w-36">
								<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
								<span className="text-gray-400 text-sm mt-4">
									Total sales made today
								</span>
							</div>
						</div>
						<div className="flex justify-center mt-5">
							<article className="text-center">
								<span className="text-2xl font-semibold"> $420 </span>
								<p className="text-gray-500 p-5">
                  Previous transactions processing Last payments may not be include.
								</p>
							</article>
						</div>
					</div>

					<div className="col-span-2">
						<Charts />
					</div>
				</div>


				{/* tables */}
				<div className="flex border border-gray-200 p-4">
					{/* last order */}
					<div className="p-4 mt-5 max-w-lg bg-white rounded-lg  shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
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

					{/* top customer */}
					<div className="p-4 mt-5 flex-1 bg-white rounded-lg  shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="relative overflow-x-auto mt-5  sm:rounded-lg">
							<span className="ml-2 font-semibold mt-5 uppercase">
								Top Customer
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
				</div>


			</div>
		</Layout>
	);
};

export default dashboard;
