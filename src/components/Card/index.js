import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Card(props) {
    return (
    <div className="card">
        {props.conteudo}
        <Link to="#">Ver mais</Link>
    </div>
    )
}

export default Card