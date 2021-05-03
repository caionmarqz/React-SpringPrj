import React, { Component } from 'react';
import Chart from 'react-apexcharts';

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
                options={{...options, labels: mockData.labels}}
                series={mockData.series}
                type="donut"
                height="240"
            />
        )
    }
}
