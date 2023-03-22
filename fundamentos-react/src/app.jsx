import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParemetro from './components/basicos/ComParametro'
export default () => (

    <div>
        <h1>Fundamentos React</h1>
        <ComParemetro Titulo='Situaçao do aluno  '
            aluno=' Pedro'
            nota={10}></ComParemetro>
        <Primeiro></Primeiro>
    </div>

);