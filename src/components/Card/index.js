import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import './styles.css'

function Card(props) {
    return (
        <div className="card">
            { props.children }
            <Link to={props.url}>See more <FaEye /></Link>
        </div>
    )
}

export default Card