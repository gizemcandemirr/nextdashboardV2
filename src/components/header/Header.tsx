import React, { useEffect } from "react";
import {useTheme} from "next-themes"
import { SearchIcon, MoonIcon, BellIcon, ArrowDownIcon, SunIcon } from "@heroicons/react/outline";


// json dosyaları
import notifications from "../../../JsonData/notification.json";
import Link from "next/link";
import Image from "next/image";

//img dosyaları

const renderNotificationItem = (item:any,index:any) =>(
  <div key={index}>
    <a className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2'> {item.content} </a>
  </div>
)


const Header = () => {
  const {theme, setTheme} = useTheme();

  return (
		<>
		 <header className="flex flex-col px-6 py-3 ">
      <div className="flex justify-between items-center  dark:bg-gray-700">
      	{/* search bar */}
			 <div className="flex items-center px-1 py-1 w-64 ">
				   <input type="text" placeholder="Search..." className=" pl-2 h-12 rounded-lg w-full bg-gray-100 focus:outline-none dark:bg-gray-800" />
					 <span className="w-16 h-12 bg-[#7a7fdc] text-white rounded-lg flex justify-center items-center shadow-md border-2 border-[#9ca0eb] font-bold cursor-pointer hover:bg-[#777abb] hover:border-0">	
						 		<SearchIcon className="h-5 w-5" />
						</span>
					
			 </div>

        {/* Right Button Group */}
				<div className="flex space-x-6 m-2 items-center">	 
				 <div>
					 <Image src="/en.jpg" width={32} height={24} className="cursor-pointer" />
				 </div>
				 <div>
				<button onClick={() => setTheme(theme=== "dark" ? "light" : "dark")}>{theme=== "light" ? <MoonIcon className="w-6 h-6 text-[#555b6d] cursor-pointer"/> : <SunIcon className="w-6 h-6 text-[#555b6d] cursor-pointer"/>}	  </button>
				 </div>
				 <div>
				 <BellIcon className="w-6 h-6 text-[#555b6d] cursor-pointer"/>

				 </div>
				 <div className="flex items-center space-x-2 border border-violet-200 p-2 rounded-lg">
					 <div className="border-4 border-violet-400 rounded-full">
					 <Image src="/avatar.jpg" width={45} height={40} className="rounded-full cursor-pointer "  />

					 </div>
					 <button className="flex">Admin
             <ArrowDownIcon className="w-6 h-6 text-[#555b6d]" />
					 </button>
				 </div>
			 </div>

      </div>
    </header>

		</>
   


  );
};

export default Header;
