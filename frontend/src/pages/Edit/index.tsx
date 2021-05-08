import Footer from "components/Footer"
import NavBar from "components/NavBar"
import React from "react"

export const Edit = () => {













    return (
        <div>
            <NavBar />
            <form>
                <div className="container">
                    <div className="card col-md-6 offset-md-3">
                        <div className="form-group ">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="data">Data</label>
                            <input type="date" className="form-control" id="data" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vendas">Quantidade vendas</label>
                            <input type="text" className="form-control" id="vendas" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="valor">Total em R$</label>
                            <input type="text" className="form-control" id="valor" />
                        </div>
                        <button className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>

    )
}