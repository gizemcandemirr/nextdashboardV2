import React, { useState, Fragment, } from "react";
import { Dialog, Transition } from '@headlessui/react'
//images
import {
	SortDescendingIcon,
	FilterIcon,
	SearchIcon,
	XCircleIcon,
	ChevronRightIcon,
	XIcon
} from "@heroicons/react/solid";

type Props = {
	title: string;
};

const TableHeader = (props: Props) => {
	let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
	
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
			<div className="flex justify-between mt-8 items-center mb-3 space-x-4">
				{/* search */}

				<div className="flex justify-center items-center ">
					<div className=" xl:w-96">
						<div className="input-group relative flex flex-wrap items-stretch w-full rounded">
							<input
								type="search"
								className="form-control relative  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Search"
								aria-label="Search"
								aria-describedby="button-addon2"
							/>
							<span
								className="input-group-text flex cursor-pointer items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
								id="basic-addon2"
							>
								<SearchIcon width={24} height={24} />
							</span>
						</div>
					</div>
				</div>

				{/* seçilen filtreler */}
				<div className="bg-gray-100 w-fit h-fit rounded-xl">
					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10">
							<span className=""> bluz </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>

						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> balgat deposu </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> balgat deposu </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> balgat deposu </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> balgat deposu </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> seçil </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> etek </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> balgat deposu </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
						<div className=" flex items-center px-2 py-2 font-bold space-x-2 h-10 ">
							<span className=""> stok </span>
							<button>
								<XCircleIcon width={24} height={24} />
							</button>
						</div>
					</div>
				</div>

				{/* butonlar */}
				<div className="flex space-x-4">
					<div className="flex space-x-2">
					
        <button
          type="button"
					onClick={openModal}
          className="flex rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >	
				<FilterIcon width={24} height={24} />

          Filter
        </button>
      
					</div>
					<div className="flex items-center space-x-2">
						<SortDescendingIcon width={24} height={24} />
						<span className="cursor-pointer">Sırala </span>
					</div>
					
				</div>
			</div>


        {/* modal content */}
				<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between text-gray-700">
									<Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Filtreleme
                  </Dialog.Title>
									<button><XIcon width={24} height={24} /></button>

									</div>  

									<div className="mt-4">
										 <button
                      type="button"
                      className="inline-flex justify-between items-center rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ürün Satıcısı
                       <ChevronRightIcon width={24} height={24} className="ml-2"/>
                    </button>	
									</div>
									
                  <div className="mt-4">
                   <button
                      type="button"
                      className="inline-flex justify-between items-center rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      - İle Etiketlendi
											<ChevronRightIcon width={24} height={24} className="ml-2"/>

                    </button>
                  </div>

									<div className="mt-4">
                   <button
                      type="button"
                      className="inline-flex justify-between items-center rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Durum
											<ChevronRightIcon width={24} height={24} className="ml-2"/>

                    </button>
                  </div>
									<div className="mt-4">
                   <button
                      type="button"
                      className="inline-flex items-center justify-between rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                       onClick={closeModal}
                    >
                      Ürün Türü
											<ChevronRightIcon width={24} height={24} className="ml-2"/>

                    </button>
                  </div>
									<div className="mt-4">
                   <button
                      type="button"
                      className="inline-flex items-center justify-between rounded-md w-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Koleksiyon
											<ChevronRightIcon width={24} height={24} className="ml-2"/>

                    </button>
                  </div>
									<div className="mt-4">
                   <button
                      type="button"
                      className="inline-flex items-center justify-between rounded-md border w-full border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Hediye Kart
											<ChevronRightIcon width={24} height={24} className="ml-2"/>

                    </button>
                  </div>

									<div className="mt-4 flex justify-center">
                   <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-blue-900 hover:text-blue-700 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      temizle
                    </button>
                  </div>





                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
		</div>
	);
};

export default TableHeader;


