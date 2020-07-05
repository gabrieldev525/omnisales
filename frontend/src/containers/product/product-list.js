// react imports
import React from 'react'

// third imports
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsPencil,
  BsTrash
} from 'react-icons/bs'
import {
  AiOutlinePlus
} from 'react-icons/ai'

// project imports
import '../../static/css/product.scss'



const produtos = [
  {
    nomeDoProduto: 'Camisa Social Preta',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '120,00',
    avaliacao: 5,
    status: 'Em estoque'
  },
  {
    nomeDoProduto: 'Camisa Social Azul',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '150,00',
    avaliacao: 4.5,
    status: 'Em estoque'
  },
  {
    nomeDoProduto: 'Camisa Social Vermelha',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '180,00',
    avaliacao: 4,
    status: 'Em estoque'
  },
  {
    nomeDoProduto: 'Camisa Social Vermelha',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '180,00',
    avaliacao: 4,
    status: 'Em estoque'
  },
  {
    nomeDoProduto: 'Camisa Social Vermelha',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '180,00',
    avaliacao: 4,
    status: 'Em estoque'
  },
  {
    nomeDoProduto: 'Camisa Social Vermelha',
    platafroma: 'Mercado Livre',
    qtdDeVendas: '200',
    dataDePublicacao: '20/06/2020',
    preco: '180,00',
    avaliacao: 4,
    status: 'Em estoque'
  },
]


const TableList = () => {
  return (
    <div className='table-list-content'>
      <div className='container-header'>
        <button>Criar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type='checkbox' id='checkTodos' ></input></th>
            <th>Nome do produto</th>
            <th>Plataforma</th>
            <th>Qtd.de vendas</th>
            <th>Data de Publicação</th>
            <th>Preço</th>
            <th>Avaliação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((item, index) => {
              let has_decimal_point = item.avaliacao.toString().split('.').length > 1
              let stars = []
              for (let i = 0; i < 5; i++) {
                  if (i + 1 <= item.avaliacao) {
                      stars.push(<BsStarFill color='#F9A94B' size={10} />)
                  } else if (has_decimal_point) {
                      stars.push(<BsStarHalf color='#F9A94B' size={10} />)
                  } else {
                      stars.push(<BsStar color='#F9A94B' size={10} />)
                  }
              }

              return (
                <tr key={index}>
                  <td><input type="checkbox" id="foo" name="foo"  ></input></td>
                  <td id="nomeDoProduto">{item.nomeDoProduto}</td>
                  <td id="plataforma">{item.platafroma}</td>
                  <td id="qtdDeVendas">{item.qtdDeVendas}</td>
                  <td id="dataDePublicacao">{item.dataDePublicacao}</td>
                  <td id="preco">{item.preco}</td>
                  <td id="stars">{stars}</td>
                  <td id="status">{item.status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableList