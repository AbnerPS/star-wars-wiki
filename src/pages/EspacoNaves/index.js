import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FiArrowRight } from 'react-icons/fi'
import './styles.css'


const EspacoNaves = () => {
    const [personagens, setPersonagens] = useState([])
    const [countEspacoNaves, setCountEspacoNaves] = useState(0)
    const [planetas, setPlanetas] = useState([])
    const [espacoNaves, setEspacoNaves] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then(response => {
            const contagem = response.data.count
            console.log(response.data);
            const espacoNaves = response.data.results
            setCountEspacoNaves(contagem)
            setEspacoNaves(espacoNaves)
        })
    }, [])

    return (
        <div id="main">
            <Header/>

            <h1>TOTAL DE ESPAÇO NAVES: {countEspacoNaves}</h1>
            <div id="content">
                {espacoNaves.map(espacoNaves => (
                    <div className="card" key={espacoNaves.name}>
                    <h2>{espacoNaves.name}</h2>
                    <span>Modelo: {espacoNaves.model}</span>
                    <span>Fabricante: {espacoNaves.manufacturer}</span>
                    <span>Custo em créditos: {espacoNaves.cost_in_credits}</span>
                    <span>Comprimento: {espacoNaves.length}</span>
                    <span>Velocidade Máxima de Atmosfera: {espacoNaves.max_atmosphering_speed}</span>
                    <span>Tripulação: {espacoNaves.crew}</span>
                    <span>Passageiros: {espacoNaves.passengers}</span>
                    <span>Capacidade de Carga: {espacoNaves.cargo_capacity}</span>
                    <span>Consumíveis: {espacoNaves.consumables}</span>
                    <span>Classificação Hyperdrive: {espacoNaves.hyperdrive_rating}</span>
                    <span>MGLT: {espacoNaves.MGLT}</span>
                    <span>Classe da Nave: {espacoNaves.starship_class}</span>
                    <span>Pilotos: {espacoNaves.pilots[0]}</span>
                    <Link to="#">Detalhes</Link>
                </div>
                ))}
            </div>
            <div className="next-page">
                <Link to="#">Próxima página 
                    <span>
                        <FiArrowRight/>
                    </span>
                </Link>
            </div>

            <Footer/>
        </div>
    )
}

export default EspacoNaves