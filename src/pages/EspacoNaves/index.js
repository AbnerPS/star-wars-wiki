import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './naves.css'


const EspacoNaves = () => {
    const [page, setPage] = useState(1)
    const [countEspacoNaves, setCountEspacoNaves] = useState(0)
    const [espacoNaves, setEspacoNaves] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(response => {
            const contagem = response.data.count
            const naves = response.data.results

            setCountEspacoNaves(contagem)
            setEspacoNaves(naves)

            response.data.next === null ?
            document.getElementById('btnNext').style.display = 'none' :
            document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
            document.getElementById('btnPrevious').style.display = 'none' :
            document.getElementById('btnPrevious').style.display = 'block'
        })
    }, [page])

    function handleNextPage() {
        const currentPage = page + 1
        setPage(currentPage)
        console.log(page)
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
        console.log(page)
    }

    return (
        <div id="main">
            <Header/>

            <h1>TOTAL DE ESPAÇO NAVES: {countEspacoNaves}</h1>
            <div id="content">
                {espacoNaves.map(espacoNaves => (
                    <div className="card-naves" key={espacoNaves.name}>
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
            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft/>PÁGINA ANTERIOR</button>

                <button id="btnNext" onClick={handleNextPage}>PRÓXIMA PÁGINA<FaArrowCircleRight/></button>
            </div>

            <Footer/>
        </div>
    )
}

export default EspacoNaves