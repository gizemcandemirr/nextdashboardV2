import React from "react";

const userpermissions = () => {
  return (
    <div className="h-screen flex  gap-4 pl-2 pr-2 bg-white">
      <a
        href="#"
        className="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
      >
        <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
         
          PERMISSIONS
        </p>

        <div className="grid grid-cols-6 p-5 gap-y-2 border-b-4 border-gray-200">
          <div>
            <img
              src="https://picsum.photos/seed/2/200/200"
              className="max-w-16 max-h-16 rounded-full"
            />
          </div>

          <div className="col-span-5 md:col-span-4 ">
            <p className="text-sky-500 font-bold text-xs"> Gizem Candemir </p>

            <p className="text-gray-600 font-bold">
            
              [Front End Developer] Last Seen
            </p>

            <p className="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>

            <p className="text-gray-400"> Beginner developer </p>
          </div>

          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
             
              Transfer ownership
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-5 gap-y-2 border-b-4 border-gray-200">
          <div className="col-span-5 md:col-span-5">
            <p className="text-sky-500 font-bold text-xs"> User(0,50) </p>

            <p className="text-gray-600 font-bold mt-5">
              Customize what your staff members can edit and access.
            </p>

            <p className="rounded-lg text-purple-200 font-bold bg-purple-100 mt-5 py-2 px-3 mr-1 text-sm w-24">
              Add User
            </p>
          </div>

          <div className="flex col-start-2 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 mr-1 text-sm h-fit">
           
              Dashboard
            </p>
            <p className="rounded-lg text-green-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
              Invited List
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-5 gap-y-2 border-b-4 border-gray-200">
          <div className="col-span-5 md:col-span-5 mt-5">
            <p className="text-sky-500 font-bold text-xs">Role(0,50) </p>

            <p className="text-gray-600 font-bold mt-5">
              Customize what your staff members can edit and access.
            </p>

            <p className="rounded-lg text-purple-200 font-bold bg-purple-100 mt-5 py-2 px-3 text-sm w-24">
              Add Role
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default userpermissions;
