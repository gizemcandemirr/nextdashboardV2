import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartOptions = {
    options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "Orders",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
				{
          name: "Amounts",
          data: [50, 10, 5, 100, 42, 87, 91, 70]
        }
      ]
    };

    
const Charts = () => {
  return (
    <div className='w-full h-80'> 
    
  <Chart
    options={chartOptions.options}
    series={chartOptions.series}
    type="line"
    height="100%"
  />

  
  </div>
  )
}

export default Charts