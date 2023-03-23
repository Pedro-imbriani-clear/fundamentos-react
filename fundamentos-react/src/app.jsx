import './App.css'
import React from 'react'
import UsuarioInfo from './components/condicional /UsuarioInfo';
import ParOuImpar from './components/condicional /ParOuImpar';
import ListaAluno from './components/repetiçao/ListaAluno';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro'
import ComParemetro from './components/basicos/ComParametro'
import TabelaProdutos from './components/repetiçao/TabelaProdutos';
import DiretaPai from './components/comunicaçao/DiretaPai';
import IndiretaPai from './components/comunicaçao/IndiretaPai';
import Input from './components/formulario/Input';
export default () => (

    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
        <Card titulo='#11 Componente Controlado' color="#e45f56">
                <Input></Input>

            </Card>
            <Card titulo='#10 Comunicaçao Indireta' color="#8bad39">
                <IndiretaPai></IndiretaPai>

            </Card>
            <Card titulo='#9 Comunicaçao Direta' color="#59323c">
                <DiretaPai></DiretaPai>

            </Card>

            <Card titulo='#8 Renderizaçao Condicional ' color="#982395">
                <ParOuImpar numero={23}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Pedro' }}></UsuarioInfo>

            </Card>
            <Card titulo='#7 Desafio Repetiçao ' color="#FF432e">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo='#6 Repetiçao ' color="#FF4C65">
                <ListaAluno></ListaAluno>
            </Card>
            <Card titulo='#5 Componentes com Filhos ' color="#00c8">
                <Familia sobrenome='Imbriani'>
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Gustavo' />

                </Familia>
            </Card>
            <Card titulo='#4 Desafio Aleatorio' color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo='# 3Fragmento' color="#E94c6f">
                <Fragmento />
            </Card>
            <Card titulo='# 2ComParametro' color='#e8b71a'>
                < ComParemetro Titulo='Situaçao do aluno  '
                    aluno=' Pedro'
                    nota={10}></ComParemetro>
            </Card>
            <Card titulo='# 1Promeiro' color='#588c73'>
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>

);