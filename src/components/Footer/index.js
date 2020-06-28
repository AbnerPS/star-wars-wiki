import React from 'react'
import { FaCodepen, FaLinkedin, FaGithub, FaJediOrder} from 'react-icons/fa'
import foto from '../../assets/FotoPerfil.jpg'
import './footer.css'

function Footer() {
    return (
    <footer>
 
        <div className="fonte-api">
            <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">
                <span>Star Wars API <FaJediOrder/></span>
            </a>
        </div>

        <div className="redes-sociais">
            <a href="https://codepen.io/Abner_Silva" target="_blank"
                rel="noopener noreferrer">
                    <FaCodepen/>
                </a>
                <a href="https://www.linkedin.com/in/abner-pereira-silva-8715a326/" target="_blank"
                rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/AbnerPS" target="_blank"
                rel="noopener noreferrer">
                    <FaGithub/>
                </a>
        </div>
        
        <div className="criador">
            <span>Desenvolvido por <strong>Abner Pereira Silva</strong></span>
            <img src={foto} alt="Foto Perfil"/>
            <span><strong>Desenvolvedor Full Stack</strong></span>      
        </div>
        
        
    </footer>
    )
}

export default Footer