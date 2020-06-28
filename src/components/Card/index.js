import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

function Card(props) {
    return (
    <div className="card">
        {props.conteudo}
        <Link to={props.url}>Ver mais</Link>
    </div>
    )
}

export default Card