import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

const Home = () => {
    return (
        <div id="home-page">
            <header>
                <h1>Star Wars</h1>
                <div className="menu-bar">
                    <Link>Home</Link>
                    <Link>Personagens</Link>
                    <Link>Planetas</Link>
                    <Link>Espaço-Naves</Link>
                    <FiSearch />
                </div>
            </header>

            <div id="content">
                <h1>Conteudo Aqui</h1>
            </div>
            <div id="extras">
                <h1>Extras Aqui</h1>
            </div>
        </div>
    )
}

export default Home