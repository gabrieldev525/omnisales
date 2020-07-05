import React, { Component, Fragment } from 'react'
import '../../static/css/table.scss'
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

import '../../static/css/cadastroProduto.scss'


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
    }

];

const TableHeadbutton = () => {
    return (
        <thead>
            <tr>
                <th><input className="inputProcurar" placeholder="Buscar por nome de produto"></input> <button className="botaoBuscar">Buscar</button></th>
                <th><button className="cadastrar" ><AiOutlinePlus color='#fffff' size={12} /> Cadastrar</button> </th>
                <th><button className="editar"> <BsPencil color='#fffff' size={12} /> Editar</button></th>
                <th><button className="deletar"> <BsTrash color='#fffff' size={12} /> Deletar</button></th>
            </tr>
        </thead>
    );
}

// function marcarDesmarcar(source)  {
//     checkboxes = document.getElementById('foo');
//     for(var i=0, n=checkboxes.length;i<n;i++) {
//     checkboxes[i].checked = source.checked;
//     }
// }   

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th><input type="checkbox" id="checkTodos" ></input></th>
                <th>Nome do produto</th>
                <th>Plataforma</th>
                <th>Qtd.de vendas</th>
                <th>Data de Publicação</th>
                <th>Preço</th>
                <th>Avaliação</th>
                <th>Status</th>
            </tr>
        </thead>
    );
}


const TableBody = props => {
    const linhas = produtos.map((linha, index) => {

        let has_decimal_point = linha.avaliacao.toString().split('.').length > 1
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (i + 1 <= linha.avaliacao) {
                stars.push(<BsStarFill color='#F9A94B' size={20} />)
            } else if (has_decimal_point) {
                stars.push(<BsStarHalf color='#F9A94B' size={20} />)
            } else {
                stars.push(<BsStar color='#F9A94B' size={20} />)
            }

        }




        return (
            <tr key={index}>
                <td><input type="checkbox" id="foo" name="foo"  ></input></td>
                <td id="nomeDoProduto">{linha.nomeDoProduto}</td>
                <td id="plataforma">{linha.platafroma}</td>
                <td id="qtdDeVendas">{linha.qtdDeVendas}</td>
                <td id="dataDePublicacao">{linha.dataDePublicacao}</td>
                <td id="preco">{linha.preco}</td>
                <td id="stars">{stars}</td>
                <td id="status">{linha.status}</td>
            </tr>
        )
    });

    return (
        <tbody id="tabela">
            {linhas}
        </tbody>
    )
}



class Tabela extends Component {
    render() {

        return (
            <>
                <table className="tabela">
                    <TableHeadbutton />
                    <TableHead />
                    <TableBody produtos={produtos} />
                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">&raquo;</a>
                    </div>
                </table>


            </>
        );
    }
}

export default Tabela;