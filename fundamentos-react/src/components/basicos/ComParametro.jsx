//import React from 'react'

export default function ComParemetro(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado "
    return (
        <div>
            <h2>{props.Titulo}</h2>
            <h3>
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e esta
                <strong> {status} </strong>
            </h3>
        </div>
    )
}