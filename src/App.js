import React, { Component, useState, useEffect } from 'react';
import * as d3 from 'd3'
import PieChart from 'react-minimal-pie-chart';
import Chart from 'react-apexcharts';

// import { getColumns } from './lib/utils'
import DataService from './lib/DataService'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companyInfo: {
        tradeName: '',
        longName: '',
        totalAssets: '',
        totalLiability: '',
        netAssets: ''
      },
      holdingInfo: {},
      series: [],
      labels: [],
      currentHoldingInfo: null
    };

  }

  componentDidMount() {
    DataService.getData()
      .then((data) => {
        const series = []
        const labels = []

        const holdingInfo = data.holdingInfo.reduce((holdings, h) => {
          series.push(parseInt(h.totalValue))
          labels.push(h.name)
          holdings[h.name] = h

          return holdings;
        }, {})

        console.log(series.length)

        this.setState({
          companyInfo: data.companyInfo,
          series,
          labels,
          holdingInfo
        })
      })
  }

  buildOptions = () => {
    return {
      chart: {
        width: 380,
        type: 'pie',
        events: {
          dataPointSelection: (event, chartContext, config) => {
            const value = config.w.config.series[config.dataPointIndex]
            const name = config.w.config.labels[config.dataPointIndex]

            this.setState({
              currentHoldingInfo: this.state.holdingInfo[name]
            })
          }
        }
      },
      labels: this.state.labels
    }
  }

  render() {
    const { currentHoldingInfo } = this.state

    return (
      <div>
        <h2>{this.state.companyInfo.longName}</h2>
        <h3>Trade Name: {this.state.companyInfo.tradeName}</h3>
        <h3>Total Assets: {this.state.companyInfo.totalAssets}</h3>
        <h3>Total Liability: {this.state.companyInfo.totalLiability}</h3>
        <h3>Net Assets: {this.state.companyInfo.netAssets}</h3>

        <div style={{width: '300px'}}>
          <Chart options={this.buildOptions()} series={this.state.series} type="pie" width={2000} />
        </div>

        {
          this.state.currentHoldingInfo &&
          <div>
            <div>type: {currentHoldingInfo.type}</div>
            <div>issuer: {currentHoldingInfo.issuer}</div>
            <div>name: {currentHoldingInfo.name}</div>
            <div>typeOfIssuer: {currentHoldingInfo.typeOfIssuer}</div>
            <div>issuerCountry: {currentHoldingInfo.issuerCountry}</div>
            <div>originalBalance: {currentHoldingInfo.originalBalance}</div>
            <div>totalValue: {currentHoldingInfo.totalValue}</div>
            <div>ltv: {currentHoldingInfo.ltv}</div>
          </div>
        }
      </div>
    );
  }
}
