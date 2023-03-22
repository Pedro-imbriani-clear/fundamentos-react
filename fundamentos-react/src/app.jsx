import './App.css'
import React from 'react'
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro'
import ComParemetro from './components/basicos/ComParametro'
export default () => (

    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
        <Card titulo='#4 Desafio Aleatorio'>
        <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo='# 3Fragmento'>
        <Fragmento />
        </Card>
        <Card titulo='# 2ComParametro'>
        < ComParemetro Titulo='Situaçao do aluno  '
            aluno=' Pedro'
            nota={10}></ComParemetro> 
        </Card>
        <Card titulo='# 1Promeiro'>
        <Primeiro></Primeiro>
        </Card>
        </div>
        
    </div>

);