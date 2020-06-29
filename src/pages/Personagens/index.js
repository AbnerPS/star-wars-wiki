import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgPersonagem from '../../assets/stormtrooper.png'
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

            // paginação
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
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
    }

    return (
        <div id="main">
            <Header/>

            <div className="count">
                <h1>TOTAL CHARACTERS: {countPersonagens}</h1>
                <img src={ImgPersonagem} alt="Imagem Personagem"/>
            </div>

            <div id="content">
                {personagens.map(personagens => (
                <div className="card-personagem" key={personagens.name}>
                    <h2>{personagens.name}</h2>
                    <span>Height: {personagens.height / 100} m</span>
                    <span>Mass: {personagens.mass} kg</span>
                    <span>Hair Color: {personagens.hair_color}</span>
                    <span>Skin Color: {personagens.skin_color}</span>
                    <span>Eye Color: {personagens.eye_color}</span>
                    <span>Birth Year: {personagens.birth_year}</span>
                    <span>Gender: {personagens.gender}</span>
                    <span>Species: {personagens.species[0]}</span>
                    <span>Homeworld: {personagens.homeworld}</span>
                </div>
                ))}
                
            </div>
            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft/>PREVIOUS PAGE</button>

                <button id="btnNext" onClick={handleNextPage}>NEXT PAGE<FaArrowCircleRight/></button>
            </div>
            <Footer/>
        </div>
    )
}

export default Home