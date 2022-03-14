import React from "react";
import Dropdown from "../dropdown/Dropdown";
import {useTheme} from "next-themes"
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

// json dosyaları
import notifications from "../../../JsonData/notification.json";
import Link from "next/link";

const renderNotificationItem = (item,index) =>(
  <div key={index}>
    <a className='block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2'> {item.content} </a>
  </div>
)

const BellImg = <svg
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
  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
/>
</svg>

const Header = () => {
  const {theme, setTheme} = useTheme();

  return (
    <header className="flex flex-col px-6 py-3 ">
      <div className="flex justify-between items-center  dark:bg-gray-700">
        {/* search */}
        <div className="relative w-80 ml-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            placeholder="Search"
            className="block w-full text-sm border border-gray-400 rounded-md py-1 pl-10 pr-4 placeholder-gray-400"
          />
        </div>

        {/* Right Button Group */}
        <div className="flex items-center">             
          <Dropdown 
         Img={BellImg}
        contentData={notifications}
        renderItems={(item,index) =>renderNotificationItem(item,index) }
        renderFooter={()=> <Link href='/'>View All</Link>}  />
          <button className="p-2"
       onClick={() => setTheme(theme=== "dark" ? "light" : "dark")}> {theme=== "light" ? <ModeNightOutlinedIcon style={{"color": 'gray'}} /> : <WbSunnyOutlinedIcon />}</button>
         <Dropdown 
         header="Admin"
        contentData={notifications}
        renderItems={(item,index) =>renderNotificationItem(item,index) }
          />
       
      

        </div>

      </div>
    </header>
  );
};

export default Header;
