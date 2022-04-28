import React from "react";
//images
import { SortDescendingIcon , FilterIcon, SearchIcon, XCircleIcon} from "@heroicons/react/solid";

type Props = {
	title: string;
};

const TableHeader = (props: Props) => {
	return (
		<div className="">
			{/* top navbar */}
			<div className="flex justify-between items-center  mt-4">
				<div>
					<span className="text-lg font-semibold">{props.title} </span>
				</div>

				<div className="space-x-2">
					<button className="hover:bg-blue-50 w-20 rounded-full font-semibold">
						Export
					</button>
					<button className="hover:bg-blue-50 w-20 rounded-full font-semibold">
						İmport
					</button>
					<button className="bg-gray-700 text-white text-sm hover:bg-gray-600 w-24 h-10  rounded-full font-semibold">
						Ürün Ekle
					</button>
				</div>
			</div>

			{/* bottom navbar */}
			<div className="flex justify-between mt-8 items-center mb-3 space-x-4" >
				{/* search */}
		
				<div className="flex justify-center items-center ">
  <div className=" xl:w-96">
    <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
      <input type="search" className="form-control relative  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <span className="input-group-text flex cursor-pointer items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
       
			 
			  <SearchIcon width={24} height={24} />

      </span>
    </div>
  </div>

				</div>

				{/* seçilen filtreler */}
				<div className="bg-gray-100 w-fit h-fit rounded-xl">

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10">
							<span className="">	bluz </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>


					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	balgat deposu </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	balgat deposu </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	balgat deposu </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	balgat deposu </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	seçil </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	etek </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	balgat deposu </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
					<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className="">	stok </span>
					<button><XCircleIcon width={24} height={24} /></button>
					</div>
				</div>
				
				

					</div>

			
					{/* butonlar */}
					<div className="flex space-x-4">
						<div className="flex space-x-2">
							<FilterIcon width={24} height={24} />
							<span>Filtreleme</span>
						</div>
						<div className="flex items-center space-x-2">
						
							<SortDescendingIcon width={24} height={24} />
							<span className="cursor-pointer">Sırala </span>
						</div>
					</div>
				
			</div>
		</div>
	);
};

export default TableHeader;
