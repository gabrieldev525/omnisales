// react imports
import React, { useState } from 'react'

// third imports
import { Responsive, WidthProvider } from 'react-grid-layout'
import { BsGraphUp } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { find, map } from 'lodash'

// static
import '../../static/css/dashboard.scss'

// project imports
import GraphType from '../../components/dashboard/graph-type'
import Element from '../../components/dashboard/dashboard-element'

// local imports
import { DASHBOARD_GRAPHICS } from './constants'

const ResponsiveGridLayout = WidthProvider(Responsive);

const CustomDashboard = () => {
  const [editMode, setEditMode] = useState(false)
  const [selectedGraph, setSelectedGraph] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [layout, setLayout] = useState({})

  const onChangeGraphSelect = (event) => {
    setSelectedGraph(parseInt(event.target.value))
    setSelectedType(null)
  }

  const addGraph = () => {
    let key = 0
    if(Object.keys(layout).length > 0)
      key = parseInt(layout[Object.keys(layout).length - 1]['i']) + 1

    let data = {
      element: DASHBOARD_GRAPHICS[selectedGraph].element,
      type: DASHBOARD_GRAPHICS[selectedGraph].types[selectedType],
      title: DASHBOARD_GRAPHICS[selectedGraph].name,
      i: key.toString(),
      x: key * 2,
      y: 0,
      w: 2,
      h: 2
    }
    setLayout({ ...layout, [key]: data })
  }

  const onLayoutChange = (new_layout) => {
    let newLayout = map(new_layout, out => {
      let oldLayout = find(layout, data => {
        return data.i == out.i
      })
      return {
        ...out,
        element: oldLayout.element,
        type: oldLayout.type
      }
    })

    setLayout(newLayout)
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
                <button
                  className='action-button main-button'
                  onClick={() => setEditMode(true)}>Criar</button>
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
                onClick={addGraph}>Adicionar gráfico</button>
            </div>
          </div>
        )
      }

      {
        Object.keys(layout).length > 0 ? (
          <ResponsiveGridLayout
            className='layout'
            isDraggable={editMode}
            isResizable={editMode}
            onLayoutChange={onLayoutChange}
            layouts={layout}
            rowHeight={30}
            verticalCompact={false}
            preventCollision={false}
            cols={{lg: 60, md: 60, sm: 60, xs: 60, xxs: 60}}>
            {
              Object.entries(layout).map(([key, item]) => {
                return (
                  <div key={item['i']} data-grid={item}>
                    <Element
                      element={item['element']}
                      type={item['type']}
                      title={item['title']} />
                  </div>
                )
              })
            }
          </ResponsiveGridLayout>
        ) : (
          <h3 className='no-graph'>Nenhum gráfico no dashboard</h3>
        )
      }

    </div>
  )
}
export default CustomDashboard