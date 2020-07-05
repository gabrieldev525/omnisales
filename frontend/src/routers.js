// react imports
import React from 'react'

// project imports
import ProductDetail from './containers/product/product-detail'
import ProductList from './containers/product/product-list'
import CustomDashboard from './containers/dashboard'
import LeadsList from './containers/leads/lead-list'

// third imports
import {
  FiAirplay,
  FiTrendingUp
} from 'react-icons/fi'
import {
  MdDashboard
} from 'react-icons/md'



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
    component:ProductList,
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
  {
    path: '/leads',
    component: LeadsList,
    exact: true,
    menu: true,
    name: 'leads',
    icon: <FiAirplay />
  }
]

export default routes