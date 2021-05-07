import React, { Component } from 'react'
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import { BarChart } from "components/BarChart";
import { DonutChart } from "components/DonutChart";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1 className="text-primary py-3">Dashboard Vendas</h1>
                    <div className="row px-3">
                        <div className="col-sm-6">
                            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                            <BarChart />
                        </div>
                        <div className="col-sm-6">
                            <h5>Todas Vendas</h5>
                            <DonutChart />
                        </div>
                    </div>
                    <DataTable />
                </div>
                <Footer />
            </div>
        )
    }
}
