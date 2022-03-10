import React from 'react'

const SearchBox = () => {
  return (
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
    <input placeholder="Search" className="block w-full text-sm border border-gray-400 rounded-md py-1 pl-10 pr-4 placeholder-gray-400" />
  </div>
  )
}

export default SearchBox