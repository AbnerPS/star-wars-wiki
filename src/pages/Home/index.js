import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Timeline } from 'rsuite'
import { format } from 'date-fns'
import { FaJediOrder, FaEye } from 'react-icons/fa'
import ImgPersonagens from '../../assets/stormtrooper.png'
import ImgPlanetas from '../../assets/planeta.png'
import ImgNaves from '../../assets/nave.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import logo from '../../assets/logoYellow.png'
import 'rsuite/dist/styles/rsuite-default.css'
import './styles.css'

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
            <Header url="home" />

            <div className="content">
                <img src={logo} alt="Logo Star Wars" />
                <section>
                    <h1>Star Wars Wiki</h1>
                    <p>Star Wars Wiki, the most complete wikipedia about the Star Wars universe.</p>
                    <p>Here you find everything you need to know about the Star Wars universe.</p>
                </section>

                <div className="spotlight">
                    <div className="card-spotlight">
                        <img src={ImgPersonagens} alt="Icone Personagens"></img>
                        <div>
                            <h1>Characters</h1>
                            <p>Here you can find information about all the characters in the Star Wars franchise.</p>
                            <Link to="/personagens">View more <FaEye /></Link>
                        </div>
                    </div>

                    <div className="card-spotlight">
                        <img src={ImgPlanetas} alt="Icone Planetas"></img>
                        <div>
                            <h1>Planets</h1>
                            <p>Here you can find information about all the planets in the Star Wars franchise.</p>
                            <Link to="/planetas">View more <FaEye /></Link>
                        </div>
                    </div>

                    <div className="card-spotlight">
                        <img src={ImgNaves} alt="Icone Espaço-Naves"></img>
                        <div>
                            <h1>Startships</h1>
                            <p>Here you can find information about all the starships in the Star Wars franchise.</p>
                            <Link to="/espaco-naves">View more <FaEye /></Link>
                        </div>
                    </div>
                </div>

                <section className="section-timeline">
                    <h2>Classic Star Wars Movies</h2>
                    <Timeline className="timeline" >
                        {filmes.map(filme => (
                            <Timeline.Item dot={<FaJediOrder />}>
                                <h3>{filme.title}</h3>
                                <strong>Episode {filme.episode_id}</strong>
                                <p>{format(new Date(filme.release_date), 'dd/MM/yyyy')}</p>
                                <p>{filme.opening_crawl}</p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home