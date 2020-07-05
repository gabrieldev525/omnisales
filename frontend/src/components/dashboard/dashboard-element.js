// react imports
import React from 'react'

// project imports
import {
  GRAPH_TYPE_COLUMN,
  GRAPH_TYPE_LINE,
  GRAPH_TYPE_PIE
} from '../../containers/dashboard/constants'

import Chart from '../highcharts/chart'

const Element = ({ element, type, title }) => {
  let component = null

  if(element == 'chart') {
    component = <Chart title={title} type={type} />
  } else if(element == 'card') {

  }

  return (
    <div className='dashboard-item-container'>
      {component}
    </div>
  )
}
export default Element