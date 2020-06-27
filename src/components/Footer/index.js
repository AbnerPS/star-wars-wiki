import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaJediOrder} from 'react-icons/fa'
import foto from '../../assets/FotoPerfil.jpg'
import './styles.css'

function Footer() {
    return (
    <footer>
        <div className="fonte-api">
            <FaJediOrder/>
            <span>Star Wars API: https://swapi.dev/</span>
        </div>
                
        <div className="contato">
            <img src={foto}/>
            <span>Desenvolvido por: Abner Pereira Silva</span>
                <a href="https://www.facebook.com/AbnerGuthiwill" target="_blank"
                rel="noopener noreferrer">
                    <FaFacebook/>
                </a>
                <a href="https://www.linkedin.com/in/abner-pereira-silva-8715a326/" target="_blank"
                rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/AbnerPS" target="_blank"
                rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/abner.p.s/?hl=pt-br" target="_blank"
                rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
        </div>
    </footer>
    )
}

export default Footer