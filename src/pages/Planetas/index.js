import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './planetas.css'


const Planetas = () => {
    const [page, setPage] = useState(1)
    const [countPlanetas, setCountPlanetas] = useState(0)
    const [planetas, setPlanetas] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const contagem = response.data.count
            const planetas = response.data.results

            setCountPlanetas(contagem)
            setPlanetas(planetas)

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

            <h1>TOTAL DE PLANETAS: {countPlanetas}</h1>
            <div id="content">
                {planetas.map(planetas => (
                    <div className="card-planetas" key={planetas.name}>
                    <h2>{planetas.name}</h2>
                    <span>Periodo de Rotação: {planetas.rotation_period}</span>
                    <span>Periodo de Orbita: {planetas.orbital_period}</span>
                    <span>Diametro: {planetas.diameter}</span>
                    <span>Clima: {planetas.climate}</span>
                    <span>Gravidade: {planetas.gravity}</span>
                    <span>Terreno: {planetas.terrain}</span>
                    <span>Água na Superfície: {planetas.surface_water}</span>
                    <span>População: {planetas.population}</span>
                    <span>Residentes: {planetas.residents[0]}</span> {/*Fazer um map neste array*/}
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

export default Planetas