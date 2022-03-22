import React, { useState } from 'react'
const Table = (props: any )=> {
   

   const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit) ): props.bodyData
   const [dataShow, setDataShow] = useState(initDataShow)
 

  return (
      <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
             <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
               { 
                     props.headData && props.renderHead ? (  
											    <tr>
                              {
                                  props.headData.map((item,index) => props.renderHead(item,index))
                              }  
                         </tr>
											 ): null} 
										 </thead>
                 {  props.bodyData && props.renderBody ? (
                      <tbody> 
													{
                     dataShow.map((item,index)=> props.renderBody(item,index))
                                     
                         }		
                     
										 </tbody>
										 ): null}
                    
             
        </table>
         </div> 
         <div>
            

				 </div>
      </div>
   
  )
}

export default Table