import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FiArrowRight } from 'react-icons/fi'
import './styles.css'


const Home = () => {
    const [personagens, setPersonagens] = useState([])
    const [countPersonagens, setCountPersonagens] = useState(0)
    const [planetas, setPlanetas] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then(response => {
            const contagem = response.data.count
            console.log(response.data);
            const personagens = response.data.results
            setCountPersonagens(contagem)
            setPersonagens(personagens)
        })
    }, [])

    return (
        <div id="main">
            <Header/>

            <h1>Total de persoganes: {countPersonagens}</h1>
            <div id="content">
                {personagens.map(personagens => (
                <div className="card" key={personagens.name}>
                    <h2>{personagens.name}</h2>
                    <span>Altura: {personagens.height}</span>
                    <span>Peso: {personagens.mass}</span>
                    <span>Cor do Cabelo: {personagens.hair_color}</span>
                    <span>Cor da Pele: {personagens.skin_color}</span>
                    <span>Cor dos Olhos: {personagens.eye_color}</span>
                    <span>Data de Nascimento: {personagens.birth_year}</span>
                    <span>Genero: {personagens.gender}</span>
                    <span>Espécie: {personagens.species[0]}</span>
                    <span>Planeta Natal: {personagens.homeworld}</span>
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

export default Home