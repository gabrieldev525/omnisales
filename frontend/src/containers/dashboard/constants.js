export const GRAPH_TYPE_LINE = 'line'
export const GRAPH_TYPE_COLUMN = 'column'
export const GRAPH_TYPE_PIE = 'pie'


export const DASHBOARD_GRAPHICS = [
  {
    element: 'chart',
    name: 'Top 10 produtos vendidos',
    endpoint: '',
    types: [
      GRAPH_TYPE_LINE,
      GRAPH_TYPE_COLUMN,
      GRAPH_TYPE_PIE
    ]
  },
  {
    element: 'chart',
    name: 'Top 10 produtos com melhores avaliações',
    endpoint: '',
    types: [
      GRAPH_TYPE_COLUMN,
      GRAPH_TYPE_PIE
    ]
  },
  {
    element: 'chart',
    name: 'Quantidade de leads cadastrados por mês',
    endpoint: '',
    types: [
      GRAPH_TYPE_LINE,
    ]
  },
  {
    element: 'chart',
    name: 'Quantidade de vendas realizadas por mês',
    endpoint: '',
    types: [
      GRAPH_TYPE_LINE,
      GRAPH_TYPE_COLUMN
    ]
  }
]