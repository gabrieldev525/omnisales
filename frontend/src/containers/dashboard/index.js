// react imports
import React, { useState } from 'react'

// third imports
import { Responsive, WidthProvider } from 'react-grid-layout'
import { BsGraphUp } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'

// static
import '../../static/css/dashboard.scss'

// project imports
import GraphType from '../../components/dashboard/graph-type'

// local imports
import { DASHBOARD_GRAPHICS } from './constants'

const ResponsiveGridLayout = WidthProvider(Responsive);

const CustomDashboard = () => {
  const [editMode, setEditMode] = useState(false)
  const [selectedGraph, setSelectedGraph] = useState(null)
  const [selectedType, setSelectedType] = useState(null)

  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ]

  const style = {width: '90px', height: '90px', backgroundColor: 'white' }

  const onChangeGraphSelect = (event) => {
    setSelectedGraph(parseInt(event.target.value))
    setSelectedType(null)
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        {
          editMode ? (
            <input className='dashboard-name-input' placeholder='Nome do dashboard' />
          ) : (
            <select className='dashboard-select'>
              <option>Nome do dashboard</option>
            </select>
          )
        }

        <div className='action-button-container'>
          {
            editMode ? (
              <>
                <button
                  className='action-button main-button'
                  onClick={() => setEditMode(false)}>Salvar</button>
                <button
                  className='action-button secondary-button'
                  onClick={() => setEditMode(false)}>Cancelar</button>
              </>
            ) : (
              <>
                <button className='action-button main-button'>Criar</button>
                <button
                  className='action-button secondary-button'
                  onClick={() => setEditMode(true)}>Editar</button>
              </>
            )
          }
        </div>
      </div>

      {/* edit mode subheader */}
      {
        editMode && (
          <div className='dashboard-header dashboard-subheader'>
            <div className='flex-row group-menu'>
              <div className='dashboard-menuitem'>
                <p>Dados do gráfico</p>
                <select
                  className='dashboard-select'
                  onChange={onChangeGraphSelect}>
                  <option disabled selected value>selecione um dashbord</option>
                  {
                    DASHBOARD_GRAPHICS.map((item, index) => {
                      return <option key={index} value={index}>{item.name ? item.name : '---'}</option>
                    })
                  }
                </select>
              </div>

              {
                selectedGraph != null && (
                  <div>
                    <p>Tipo do gráfico</p>

                    <div className='graph-type-container flex-row'>
                      {
                        DASHBOARD_GRAPHICS[selectedGraph].types.map((item, index) => {
                          return (
                            <GraphType
                              type={item}
                              key={index}
                              className={selectedType == index && 'active'}
                              onClick={() => setSelectedType(index)} />
                          )
                        })
                      }
                    </div>
                  </div>
                )
              }
            </div>
            <div className='action-button-right'>
              <button
                className='action-button main-button add-graph'
                onClick={() => setEditMode(false)}>Adicionar gráfico</button>
            </div>
          </div>
        )
      }

      <ResponsiveGridLayout
        className='layout'
        isDraggable={editMode}
        isResizable={editMode}
        isDroppable={editMode}
        layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key="1" style={style}>1</div>
        <div key="2" style={style}>2</div>
        <div key="3" style={style}>3</div>
      </ResponsiveGridLayout>
    </div>
  )
}
export default CustomDashboard