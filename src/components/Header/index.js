import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoHorizontal.svg'
import './styles.css'

function Header(props) {

    return (
        <header>
            <nav className="nav-main">
                <Link to="/"><img src={logo} alt="Logo Star Wars"></img></Link>
                <ul>
                    <li><Link to="/" className="home">HOME</Link></li>
                    <li><Link to="/personagens" className="personagens">CHARACTERS</Link></li>
                    <li><Link to="/planetas" className="planetas">PLANETS</Link></li>
                    <li><Link to="/espaco-naves" className="espaco-naves">STARSHIPS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

