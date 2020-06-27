import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoHorizontal.png'
import './styles.css'

function Header(){
    return (
    <header>
        <img src={logo} alt="Logo Star Wars"></img>
        <nav className="menu-bar">
            <Link to="/">HOME</Link>
            <Link to="/personagens">PERSONAGENS</Link>
            <Link to="/planetas">PLANETAS</Link>
            <Link to="/espaco-naves">ESPAÇO-NAVES</Link>
        </nav>
    </header>
    )
}

export default Header

