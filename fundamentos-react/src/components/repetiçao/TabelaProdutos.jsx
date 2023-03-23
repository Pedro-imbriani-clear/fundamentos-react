import React from 'react'
import "./TabelaProduto.css"
import Produtos from '../../data/Produtos'

export default props =>{
    function getLinhas(){
        return Produtos.map((produto, i)=>{
            return(
                <tr key={produto.id}className={i % 2 == 0 ? "Par" : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preço}</td>
                </tr>
            )
        })
    }
    return(
        <div className='TabelaProduto'>
          <table >
            <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
            </thead>
            <tbody>
               
                {getLinhas()}
                
            </tbody>
          </table>

        </div>
    )
}