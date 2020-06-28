import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import logo from '../../assets/logoYellow.png'
import Card from '../../components/Card'
import { Timeline } from 'rsuite'
import { format } from 'date-fns'
import { FaJediOrder } from 'react-icons/fa'
import ImgPersonagens from '../../assets/stormtrooper.png'
import ImgPlanetas from '../../assets/planeta.png'
import ImgNaves from '../../assets/nave.png'
import 'rsuite/dist/styles/rsuite-default.css'
import './home.css'

const Home = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`).then(response => {
        const filmes = response.data.results
        setFilmes(filmes)
    })
}, [])

    return (
        <div id="home-page">
            <Header/>

            <div className="content">
                <img src={logo} alt="Logo Star Wars"/>
                <section>
                    <p>Star Wars Wiki, a wikipedia mais completa sobre o universo Star Wars</p>
                    <p>Aqui você encontra todo que precisa saber sobre o universo de Star Wars</p>
                </section>

                <div className="spotlight">
                    <Card url="/personagens" conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgPersonagens} alt="Icone Personagens"></img>
                            <div>
                                <h1>Personagens</h1>
                                <p>Aqui você encontra informações sobre todos os personagens da franquia Star Wars</p>
                            </div>
                        </div>
                    )}/>

                    <Card url="/planetas" conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgPlanetas} alt="Icone Planetas"></img>
                            <div>
                                <h1>Planetas</h1>
                                <p>Aqui você encontra informações sobre todos os planetas da franquia Star Wars</p>
                            </div>
                        </div>
                    )}/>

                    <Card url="/espaco-naves" conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgNaves} alt="Icone Espaço-Naves"></img>
                            <div>
                                <h1>Espaço-Naves</h1>
                                <p>Aqui você encontra informações sobre todas as Espaço-Naves da franquia Star Wars</p>
                            </div>
                        </div>
                    )}/>
                </div>
                
                <section className="section-timeline">
                <Timeline className="timeline" >
                  <h2>Filmes classicos da fraquia Star Wars</h2>
                {filmes.map(filme => (
                  <Timeline.Item dot={<FaJediOrder/>}>
                  <h3>{filme.title}</h3>
                  <strong>Episodeo {filme.episode_id}</strong>
                  <p>{format(new Date(filme.release_date), 'dd/MM/yyyy')}</p>
                  <p>{filme.opening_crawl}</p>
                </Timeline.Item>
                ))}
                </Timeline>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Home