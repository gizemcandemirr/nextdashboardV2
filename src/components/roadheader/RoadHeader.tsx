import React from 'react'

//images
import {ChevronRightIcon} from "@heroicons/react/solid";


type Props = {
	title: string,
}

const RoadHeader = (props: Props) => {
	return (
		<div className='bg-[#EEF5F9] flex items-center px-3 py-3 ml-5 mr-5 justify-end'>
      <span className='cursor-pointer text-sm text-gray-400 pr-2'>Dashboard</span>
			<ChevronRightIcon width={12} height={12} />
			<span className='cursor-pointer text-sm text-gray-400 mr-5'>{props.title}</span>
		</div>
	)
}

export default RoadHeader