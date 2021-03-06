// react imports
import React, { useEffect, useState } from 'react'

// third imports
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const ColumnChart = ({ title, type }) => {
  const [options, setOptions] = useState({})
  useEffect(() => {
    setOptions({
      chart: {
        styleMode: true,
        backgroundColor: 'transparent',
        marginTop: 5,
        spacingLeft: 10
      },
      title: { text: title },
      xAxis: {
        lineColor: '#000',
        lineWidth: 1,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago'],
        labels: {
          style: {
            color: '#000'
          }
        },
      },
      yAxis: {
        gridLineWidth: 0,
        lineColor: '#000',
        lineWidth: 1,
        min: 500,
        max: 1700,
        title: {
          enabled: true
        },
        labels: {
          style: {
            color: '#000'
          }
        },
      },
      series: [{
        color: '#B1E1FC',
        type: type,
        data: [1600, 700, 1200, 980, 1000, 960, 1100, 1600]
      }],
      legend: '',
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointWidth: 17,
          borderWidth: 0,
        }
      }
    })
  }, [])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options} />
  )
}
export default ColumnChart