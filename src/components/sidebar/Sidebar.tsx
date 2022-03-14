import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const handleActive = () => {
     setIsActive(!isActive)
  }

  return (
    <div className="w-64 h-screen border border-gray-400 ">
      <div className="px-6 pt-8">
        <div className="flex items-center justify-between">
          <Link href="/about">
            <a className=" rounded flex items-center justify-center">
              <Image src="/logo.png" width={150} height={30} />
            </a>
          </Link>
          <button className="flex items-center justify-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="px-6 pt-4">
        <hr className="border-gray-700" />
      </div>

    
             
      <div className="px-6 pt-4">
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Dashboard
              </a>
            </Link>
          </li>

          <li className="text-gray-500 relative " onClick={handleActive}>
            <div className="absolute inset-y-0 flex items-center ">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <Link href="/sales" >
              <a className="isActive ? inline-block text-sm w-full pl-8 pr-4 py-2 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
               <span> Sales
                 </span>  
              </a>
            </Link>
          </li>

          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Orders
              </a>
            </Link>
          </li>
          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Products
              </a>
            </Link>
          </li>
          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Customers{" "}
              </a>
            </Link>
          </li>
          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Analytics
              </a>
            </Link>
          </li>
          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Discount
              </a>
            </Link>
          </li>

          <li className="text-gray-500 relative">
            <div className="absolute inset-y-0 flex items-center">
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <Link href="/">
              <a className="inline-block text-sm w-full pl-8 pr-4 py-2 hover:bg-gray-400 rounded focus:outline-none focus:bg-sky-300 focus:ring-2 ">
                Inventory
              </a>
            </Link>
          </li>


         
             <li className="" onClick={handleClick}>
            <div className="text-gray-500 relative flex justify-between active:bg-gray-500 active:text-white hover:bg-gray-400 rounded">
              <div className="flex items-center w-full ">
                <div className="absolute inset-y-0 flex items-center">
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                      <div className="inline-block text-sm w-full pl-8 pr-4 py-2 ">
                     Settings    
                      </div>
                   
                
              </div>
              <button className="absolute right-0 p-1 flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 stroke-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          {showOptions && (
    
           <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
           <li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-sky-300"> <Link href="/settings/users">Users</Link></li> 
              <li className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-sky-300"> <Link href="/settings/userpermissions">User Permissions </Link></li>
            </ul> 
          )}   
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
