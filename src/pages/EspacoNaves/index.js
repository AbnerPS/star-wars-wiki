import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgNaves from '../../assets/nave.png'
import './styles.css'


const EspacoNaves = () => {
    const [page, setPage] = useState(1)
    const [countEspacoNaves, setCountEspacoNaves] = useState(0)
    const [espacoNaves, setEspacoNaves] = useState([])
    const [pilotos, setPilotos] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(response => {
            const contagem = response.data.count
            const naves = response.data.results

            setCountEspacoNaves(contagem)
            setEspacoNaves(naves)

            //paginação
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const pilotos = response.data.results
            const nomePilotos = pilotos.map(piloto => piloto.name)
            setPilotos(nomePilotos)
        })
    }, [page])

    function handleNextPage() {
        const currentPage = page + 1
        setPage(currentPage)
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
    }

    return (
        <div id="main">
            <Header />

            <div className="count">
                <h1>TOTAL STARSHIPS: {countEspacoNaves}</h1>
                <img src={ImgNaves} alt="Imagem Espaço-Nave" />
            </div>

            <div id="content">
                {espacoNaves.map(espacoNaves => (
                    <div className="card-naves" key={espacoNaves.name}>
                        <h2>{espacoNaves.name}</h2>
                        <span>Model: {espacoNaves.model}</span>
                        <span>Manufacturer: {espacoNaves.manufacturer}</span>
                        <span>Cost in Credits: {espacoNaves.cost_in_credits}</span>
                        <span>Length: {espacoNaves.length}</span>
                        <span>max_atmosphering_speed: {espacoNaves.max_atmosphering_speed}</span>
                        <span>Crew: {espacoNaves.crew}</span>
                        <span>Passengers: {espacoNaves.passengers}</span>
                        <span>Cargo Capacity: {espacoNaves.cargo_capacity}</span>
                        <span>Consumables: {espacoNaves.consumables}</span>
                        <span>Hyperdrive Rating: {espacoNaves.hyperdrive_rating}</span>
                        <span>MGLT: {espacoNaves.MGLT}</span>
                        <span>Starship Class: {espacoNaves.starship_class}</span>
                        <span>Pilots: {
                            pilotos[String(espacoNaves.pilots[0]).substr(28, 3).replace('/', '') - 1]
                        }</span>
                    </div>
                ))}
            </div>
            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft />PREVIOUS PAGE</button>

                <button id="btnNext" onClick={handleNextPage}>NEXT PAGE<FaArrowCircleRight /></button>
            </div>

            <Footer />
        </div>
    )
}

export default EspacoNaves