// react imports
import React from 'react'

// third imports
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
} from 'react-icons/bs'


// project imports
import '../../static/css/product.scss'



const leads = [
  {
    nome: 'Jonatas Diniz',
    email: 'jsenadiniz@gmail.com',
    celular: '(11) 9 89305764',
    dataRegistro: '20/06/2020'
  },
  {
    nome: 'Matheus Faria',
    email: 'M.faria@gmail.com',
    celular: '(83) 9 30584758',
    dataRegistro: '20/06/2020'
  },
  {
    nome: 'Gabriel Victor',
    email: 'g.victor@hotmail.com',
    celular: '(83) 9 58478568',
    dataRegistro: '20/06/2020'
  },
  {
    nome: 'Vamberto',
    email: 'vamberto@gmail.com',
    celular: '(85) 9 83568475',
    dataRegistro: '20/06/2020'
  },
  {
    nome: 'Victor',
    email: 'victor@gmail.com',
    celular: '(81) 9 85658745',
    dataRegistro: '20/06/2020'
  },

]


const tableLead = () => {
  return (
    <div className='table-list-content'>
      <div className='container-header'>
      </div>
      <table>
        <thead>
          <tr>
            <th>nome</th>
            <th>Email</th>
            <th>celular</th>
            <th>Data de Entrada</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((item, index) => {
            return (
              <tr key={index}>
                <td id="nome">{item.nome}</td>
                <td id="Email">{item.email}</td>
                <td id="celular">{item.celular}</td>
                <td id="dataRegistro">{item.dataRegistro}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
}

export default tableLead