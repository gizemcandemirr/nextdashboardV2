import React, { useState } from "react";

const Dropdown = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
       {props.header && (
         <div className="pl-2">
          <button
            className="w-32 inline-flex rounded-md border border-gray-500 justify-between"
            onClick={handleClick}
          >
            <span className="ml-3">{props.header ? props.header : '' }</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
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
          </button>
        </div>
       )} 
       {
         props.Img && (
          <div className="pl-4 mt-2">
          <button
            className="inline-flex rounded-md justify-between"
            onClick={handleClick}
          >  {props.Img}</button>
        </div>
         )
       }

        {showOptions && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ">
            <div>
              {props.contentData && props.renderItems
                ? props.contentData.map((item, index) =>
                    props.renderItems(item, index)
                  )
                : ""}

              {props.renderFooter ? <div>{props.renderFooter()}</div> : ""}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
