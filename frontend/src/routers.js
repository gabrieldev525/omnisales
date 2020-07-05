// react imports
import React from 'react'

// project imports
import ProductDetail from './containers/product/product-detail'
import ProductList from './containers/product/product-list'
import ProductCreate from './containers/product/product-registration'
import CustomDashboard from './containers/dashboard'
import ReportList from './containers/reports/report-list'

// third imports
import {
  FiAirplay,
  FiTrendingUp,
  FiFile
} from 'react-icons/fi'

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
    component: ProductList,
    exact: true,
    menu: true,
    name: 'Lista de produtos',
    icon: <FiTrendingUp  />
  },
  {
    path: '/product/detail',
    component: ProductDetail,
    exact: false,
    menu: false,
    name: 'Detalhe do produto'
  },
  {
    path: '/product/create',
    component: ProductCreate,
    exact: false,
    menu: false,
    name: 'Criação de produto',
    icon: <FiTrendingUp />
  },
  {
    path: '/reports/list',
    component: ReportList,
    exact: false,
    menu: true,
    name: 'Lista de relatórios',
    icon: <FiFile />
  }
]

export default routes