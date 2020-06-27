import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import logo from '../../assets/logoYellow.png'
import './styles.css'


const Home = () => {

    return (
        <div id="home-page">
            <Header/>

            <div id="content">
                <img src={logo}/>
            </div>

            <Footer/>
            
        </div>
    )
}

export default Home