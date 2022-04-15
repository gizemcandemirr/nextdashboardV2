import React from "react";
import Charts from "../components/charts/Charts";
import Widgets from "../components/widgets/Widgets";
import MainLayout from "../layout/MainLayout/MainLayout";

//icons
import { CashIcon } from "@heroicons/react/outline";
import CollapseTable from "../components/customTable/CollapseTable";
import BasicTable from "../components/customTable/BasicTable";

const Headers = [
	"Bestsellers",
	"Most Viewed Products",
	"New Customers",
	"Customers",
];

const Headers2 = [
	{ title: "Customer", props: { className: "" } },
	{ title: "Items", props: { className: "" } },
	{ title: "Total", props: { className: "" } },
];

const BestSellers = [
	{ title: "Product", props: { className: "" } },
	{ title: "Price", props: { className: "" } },
	{ title: "Quantity", props: { className: "" } },
];

const MostViewed = [
	{ title: "Product", props: { className: "" } },
	{ title: "Price", props: { className: "" } },
	{ title: "Views", props: { className: "" } },
];
const Cust = [
	{ title: "Customer", props: { className: "" } },
	{ title: "Orders", props: { className: "" } },
	{ title: "Avarage", props: { className: "" } },
	{ title: "Total", props: { className: "" } },
];


let Dataaa = [
	[
		{
			title: "Gizo",
			props: { className: "" },
		},
		{
			title: "1",
			props: { className: "" },
		},
		{
			title: "2",
			props: { className: "" },
		},
	],
	[
		{
			title: "ccc",
			props: { className: "" },
		},
		{
			title: "2",
			props: { className: "" },
		},
		{
			title: "16",
			props: { className: "" },
		},
	],
];

Dataaa = Dataaa.map((dat) =>
	dat.map((x) => {
		x.title === "16" && (x.props.className = "text-red-600")
		return x;
	})
);

const dashboard = () => {
	return (
		<MainLayout>
			<div className="w-full h-screen ">
				{/* total sales && chart */}

				<div className="flex p-4 space-x-4">
					<div className="w-2/5">
						<div className="mb-5">
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

						{/* last order */}
						<BasicTable
							headers={Headers2}
							title={"Last Orders"}
							content={Dataaa}
						></BasicTable>
					</div>

					{/* charts */}
					<div className=" w-2/3 col-span-2 border border-slate-200 shadow-md p-4">
						<div className="flex justify-end m-4">
							<button className="border border-slate-200 p-4 text-md font-bold text-slate-500 w-44 rounded hover:bg-slate-100 hover:border-none ">
								Last 24 Hours
							</button>
						</div>
						<Charts />
						<div className="flex space-x-2 justify-center border mt-2">
							<div className="flex flex-col border-r p-4">
								<span className="text-md font-extrabold text-slate-600 p-4">
									Revenue
								</span>
								<span className="text-center text-sm flex items-center justify-center text-slate-400">
									{" "}
									<CashIcon className="w-6 h-6" /> 120tl
								</span>
							</div>
							<div className="flex flex-col border-r p-4">
								<span className="text-md font-extrabold text-slate-600 p-4">
									Tax
								</span>
								<span className="text-center text-sm flex items-center justify-center text-slate-400">
									{" "}
									<CashIcon className="w-6 h-6" /> 120tl
								</span>
							</div>
							<div className="flex flex-col border-r p-4">
								<span className="text-md font-extrabold text-slate-600 p-4">
									Shipping
								</span>
								<span className="text-center text-sm flex items-center justify-center text-slate-400">
									{" "}
									<CashIcon className="w-6 h-6" /> 120tl
								</span>
							</div>
							<div className="flex flex-col border-r p-4">
								<span className="text-md font-extrabold text-slate-600 p-4">
									Quantity
								</span>
								<span className="text-center text-sm flex items-center justify-center text-slate-400">
									{" "}
									<CashIcon className="w-6 h-6" /> 120tl
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* tables */}
				<div className="flex p-4 space-x-4">
					{/* last search terms*/}
					<div className="w-1/2">
							<BasicTable headers={Headers2} title={"Last Search Terms"} content={Dataaa}></BasicTable>
					</div>
				

					{/* product table */}
					<div className="flex-1 mt-8">
						<CollapseTable title={Headers}>
							<div>
							<BasicTable headers={BestSellers} title={"Best Sellers"} content={Dataaa}></BasicTable>
							</div>
							<div>
							<BasicTable headers={MostViewed} title={"Most Viewed Products"} content={Dataaa}></BasicTable>
							</div>
							<div>
							<BasicTable headers={Cust} title={"New Customers"} content={Dataaa}></BasicTable>
							</div>
							<div>
							<BasicTable headers={Cust} title={"Customers"} content={Dataaa}></BasicTable>
							</div>
						</CollapseTable>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default dashboard;
