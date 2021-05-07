import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="jumbotron">
                    <h1 className="display-4">Olá, mundo!</h1>
                    <p className="lead">Desenvolvimento de aplicativo com React, java spring boot, integração contínua.</p>
                        <p>Clique no botão para ir para a próxima pagina</p>
                        <a className="btn btn-primary btn-lg" href="/dashboard" role="button">Dashboard</a>
                </div>
                <Footer />
            </div>
        )
    }
}
