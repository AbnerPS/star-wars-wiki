import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgPlanetas from '../../assets/planeta.png'
import './styles.css'


const Planetas = () => {
    const [page, setPage] = useState(1)
    const [countPlanetas, setCountPlanetas] = useState(0)
    const [planetas, setPlanetas] = useState([])
    const [habitantes, setHabitantes] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const contagem = response.data.count
            const planetas = response.data.results

            setCountPlanetas(contagem)
            setPlanetas(planetas)

            // paginação
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
            const pessoas = response.data.results
            const nomePessoa = pessoas.map(pessoa => pessoa.name)
            setHabitantes(nomePessoa)
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
                <h1>TOTAL PLANETS: {countPlanetas}</h1>
                <img src={ImgPlanetas} alt="Imagem Planeta" />
            </div>

            <div id="content">
                {planetas.map(planetas => (
                    <div className="card-planetas" key={planetas.name}>
                        <h2>{planetas.name}</h2>
                        <span>Rotation Period: {planetas.rotation_period}</span>
                        <span>Orbital Period: {planetas.orbital_period}</span>
                        <span>Diameter: {planetas.diameter}</span>
                        <span>Climate: {planetas.climate}</span>
                        <span>Gravity: {planetas.gravity}</span>
                        <span>Terrain: {planetas.terrain}</span>
                        <span>Surface Water: {planetas.surface_water}</span>
                        <span>Population: {planetas.population}</span>
                        <span>Residents: {
                            habitantes[String(planetas.residents[0]).substr(28, 3).replace('/', '') - 1]
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

export default Planetas