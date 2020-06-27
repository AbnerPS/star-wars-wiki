import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FiArrowRight } from 'react-icons/fi'
import './styles.css'


const Planetas = () => {
    const [personagens, setPersonagens] = useState([])
    const [countPlanetas, setCountPlanetas] = useState(0)
    const [planetas, setPlanetas] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/').then(response => {
            const contagem = response.data.count
            console.log(response.data);
            const planetas = response.data.results
            setCountPlanetas(contagem)
            setPlanetas(planetas)
        })
    }, [])

    return (
        <div id="main">
            <Header/>

            <h1>TOTAL DE PLANETAS: {countPlanetas}</h1>
            <div id="content">
                {planetas.map(planetas => (
                    <div className="card" key={planetas.name}>
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

export default Planetas