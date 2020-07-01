import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Planetas from './pages/Planetas'
import EspacoNaves from './pages/EspacoNaves'

const Routes = () => {
    return (
        <BrowserRouter basename="/star-wars-wiki">
            <Route path="/" exact component={Home} />
            <Route path="/personagens" component={Personagens} />
            <Route path="/planetas" component={Planetas} />
            <Route path="/espaco-naves" component={EspacoNaves} />
        </BrowserRouter>
    )
}

export default Routes