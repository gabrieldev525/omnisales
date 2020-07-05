// react imports
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// third imports
import {
  IoMdDownload
} from 'react-icons/io'

// project imports
import '../../static/css/product.scss'



const reports = [
  {
    nomeDoArquivo: 'Relatório_07.2020_plataforma_x.pdf',
    data: 'Junho de 2020',
  },
  {
    nomeDoArquivo: 'Relatório_07.2020_plataforma_x.pdf',
    data: 'Junho de 2020',
  },
  {
    nomeDoArquivo: 'Relatório_07.2020_plataforma_x.pdf',
    data: 'Junho de 2020',
  },
  {
    nomeDoArquivo: 'Relatório_07.2020_plataforma_x.pdf',
    data: 'Junho de 2020',
  },
  {
    nomeDoArquivo: 'Relatório_07.2020_plataforma_x.pdf',
    data: 'Junho de 2020',
  },
]


const TableList = (props) => {
  return (
    <div className='table-list-content report-list'>
      <div className='container-header'>
        <button>Gerar novo</button>
        <button className='config'>Configurar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome do Arquivo</th>
            <th>Data de geração</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            reports.map((item, index) => {
              return (
                <tr key={index}>
                  <td id="nomeDoProduto">{item.nomeDoArquivo}</td>
                  <td id="data">{item.data}</td>
                  <th><IoMdDownload /></th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default withRouter(TableList)