import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import logo from '../../assets/logoYellow.png'
import Card from '../../components/Card'
import ImgPersonagens from '../../assets/stormtrooper.png'
import ImgPlanetas from '../../assets/planeta.png'
import ImgNaves from '../../assets/nave.png'
import './styles.css'


const Home = () => {

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
                    <Card conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgPersonagens} alt="Icone Personagens"></img>
                            <div>
                                <h1>Personagens</h1>
                                <p>Aqui você encontra informações sobre todos os personagens</p>
                            </div>
                        </div>
                    )}/>

                    <Card conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgPlanetas} alt="Icone Planetas"></img>
                            <div>
                                <h1>Planetas</h1>
                                <p>Aqui você encontra informações sobre todos os planetas</p>
                            </div>
                        </div>
                    )}/>

                    <Card conteudo={(
                        <div className="card-spotlight">
                            <img src={ImgNaves} alt="Icone Espaço-Naves"></img>
                            <div>
                                <h1>Espaço-Naves</h1>
                                <p>Aqui você encontra informações sobre todas as Espaço-Naves</p>
                            </div>
                        </div>
                    )}/>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}

export default Home