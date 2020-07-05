// react imports
import React from 'react'

// third imports
import { BsGraphUp } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'

// project imports
import {
  GRAPH_TYPE_COLUMN,
  GRAPH_TYPE_LINE
} from '../../containers/dashboard/constants'

const GraphType = ({ type, onClick, className='' }) => {
  let icon = null

  if(type === GRAPH_TYPE_LINE)
    icon = <BsGraphUp size={20} />
  else if(type === GRAPH_TYPE_COLUMN)
    icon = <GoGraph size={20} />

  return (
    <div className={`graph-type-item ${className}`} onClick={onClick}>
      {icon}
    </div>
  )
}
export default GraphType