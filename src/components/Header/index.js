import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoHorizontal.png'
import './header.css'

function Header(){
    return (
    <header>
        <Link to="/"><img src={logo} alt="Logo Star Wars"></img></Link>
        <nav className="menu-bar">
            <Link to="/" className="home">HOME</Link>
            <Link to="/personagens" className="personagens">PERSONAGENS</Link>
            <Link to="/planetas" className="planetas">PLANETAS</Link>
            <Link to="/espaco-naves" className="naves">ESPAÇO-NAVES</Link>
        </nav>
    </header>
    )
}

export default Header

