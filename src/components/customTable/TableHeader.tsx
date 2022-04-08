import React from 'react'
//images
import { AdjustmentsIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";

type Props = {
 title:string;
}

const TableHeader = (props: Props) => {
	return (
		<div className='flex justify-between'>
      <div><span className='text-lg font-semibold'>{props.title} </span></div>
			<div className='flex pr-5'>
				<div className='pr-5'>
					<AdjustmentsIcon width={24} height={24} />
				</div>
				<div className='flex items-center'>
				<span className='pr-2 cursor-pointer'>Filter </span><ArrowCircleDownIcon width={24} height={24} />
				
				</div>
			</div>
		</div>
	)
}

export default TableHeader