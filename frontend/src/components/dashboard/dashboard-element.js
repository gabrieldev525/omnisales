// react imports
import React from 'react'

// project imports
import {
  GRAPH_TYPE_COLUMN,
  GRAPH_TYPE_LINE
} from '../../containers/dashboard/constants'

import ColumnChart from '../highcharts/column-chart'
import LineChart from '../highcharts/line-chart'

const Element = ({ element, type, key, datagrid }) => {
  let component = null

  if(element == 'chart') {
    if(type == GRAPH_TYPE_COLUMN) {
      component = <ColumnChart />
    } else if(type == GRAPH_TYPE_LINE) {
      component = <LineChart />
    }
  } else if(element == 'card') {

  }

  return (
    <div className='dashboard-item-container' key={key} data-grid={datagrid}>
      {component}
    </div>
  )
}
export default Element