import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'


import Primeiro from './components/basicos/Primeiro'
import ComParemetro from './components/basicos/ComParametro'

const el = document.getElementById('root')
ReactDOM.render(
<div>
    <Primeiro></Primeiro>
    <ComParemetro Titulo='Situaçao do aluno  ' 
      aluno=' Pedro' 
     nota={10}></ComParemetro>
    </div>,
    el)