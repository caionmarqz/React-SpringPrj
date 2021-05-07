import axios from 'axios';
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'services/requests';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

let chartData : ChartData = {labels: [], series: []};

axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then( response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellername);
        const mySeries = data.map(x => x.sum);
        chartData = {labels: myLabels, series: mySeries}
    })


const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}


export default class DonutChart extends Component {
    render() {
        return (
            <Chart
                options={{...options, labels: chartData.labels}}
                series={chartData.series}
                type="donut"
                height="240"
            />
        )
    }
}
