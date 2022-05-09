import React from "react";

const Widgets = (props: any) => {
	return (
		<div className=" bg-white ml-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-between px-4 pt-4  space-x-6">
				<div className="text-gray-400 uppercase">{props.title}</div>
				<div className="flex">
					{props.action == "decline" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-green-700 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 15l7-7 7 7"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-red-700 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					)}

					<span className="text-gray-500">{props.rate} %</span>
				</div>
			</div>

			<div className="p-4">
				<span className="text-3xl text-gray-600"> {props.content} </span>
			</div>
			<div className="flex justify-between items-center p-4">
				<span>
				
					<a className="cursor-pointer underline text-gray-400 ">
						See all users
					</a>
				</span>
				{props.img && (

<span className="bg-slate-200 rounded-lg w-8 h-8 flex justify-center items-center">
					{props.img == "UserImg" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					)}
					{props.img == "OrderImg" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					)}
					{props.img == "EarnImg" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					)}
					{props.img == "BalanceImg" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>
					)}
				</span>

				)}
				
			</div>
		</div>
	);
};

export default Widgets;
