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
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };

    const donutOptions= {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }
  
const Charts = () => {
  return (
    <div className='w-full'> 
        <div>
  <Chart
    options={chartOptions.options}
    series={chartOptions.series}
    type="bar"
    height="100%"
  />
        </div>
        <div className='flex mt-16 justify-center'>
     <Chart
    options={donutOptions.options}
    series={donutOptions.series}
    type="donut"
    height="100%"
  />
  
  <Chart
    options={chartOptions.options}
    series={chartOptions.series}
    type="line"
    height="100%"
  />
        </div>
 
 
  
  </div>
  )
}

export default Charts