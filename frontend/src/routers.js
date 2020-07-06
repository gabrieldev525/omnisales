// react imports
import React from 'react'

// project imports
import ProductDetail from './containers/product/product-detail'
import Leads from './containers/leads/config-lead'
import ProductList from './containers/product/product-list'
import ProductCreate from './containers/product/product-registration'
import CustomDashboard from './containers/dashboard'
import LeadsList from './containers/leads/lead-list'
import ReportList from './containers/reports/report-list'
import ReportConfig from './containers/reports/report-config'

// third imports
import {
  FiAirplay,
  FiTrendingUp,
  FiFile
} from 'react-icons/fi'
import {
  MdRecordVoiceOver
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
    path: '/leads/config',
    component: Leads,
    exact: false,
    menu: false,
    name: 'Configuração de leads',
  },
  {
    path: '/leads',
    component: LeadsList,
    exact: true,
    menu: true,
    name: 'leads',
    icon: <MdRecordVoiceOver />,
  },
  {
    path: '/reports/list',
    component: ReportList,
    exact: false,
    menu: true,
    name: 'Lista de relatórios',
    icon: <FiFile />
  },
  {
    path: '/reports/config',
    component: ReportConfig,
    exact: false,
    menu: false,
    name: 'Configuração de relatórios'
  }
]

export default routes