// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'
import ProductDetail from './containers/product/product-detail'
import CustomDashboard from './containers/dashboard'

// third imports
import {
  FiAirplay,
  FiTrendingUp
} from 'react-icons/fi'
import {
  MdDashboard
} from 'react-icons/md'



import Tabela from './components/tabela/table'
export const routes = [
  {
    path: '/',
    component: CustomDashboard,
    exact: true,
    menu: true,
    name: 'Dashboards',
    icon: <FiAirplay />
  },

  {
    path: '/product/list',
    component: Tabela,
    exact: true,
    menu: true,
    name: 'Produtos',
    icon: <MdDashboard  />
  },
  {
    path: '/product/detail',
    component: ProductDetail,
    exact: false,
    menu: true,
    name: 'Detalhe do produto',
    icon: <FiTrendingUp />
  },
]

export default routes