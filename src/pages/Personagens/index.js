import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './styles.css'


const Home = () => {
    const [personagens, setPersonagens] = useState([])
    const [countPersonagens, setCountPersonagens] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const contagem = response.data.count
            const personagens = response.data.results

            setCountPersonagens(contagem)
            setPersonagens(personagens)

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
            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft/>PÁGINA ANTERIOR</button>

                <button id="btnNext" onClick={handleNextPage}>PRÓXIMA PÁGINA<FaArrowCircleRight/></button>
            </div>
            <Footer/>
        </div>
    )
}

export default Home