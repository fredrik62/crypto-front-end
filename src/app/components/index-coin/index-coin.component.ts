import { Component, OnInit } from '@angular/core';
import { CryptoChartService } from '../../services/crypto-chart.service';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-index-coin',
  templateUrl: './index-coin.component.html',
  styleUrls: ['./index-coin.component.css']
})
export class IndexCoinComponent implements OnInit {
    chart = [];
    donutCanvas: any;
    activeCryptos: any;
    activeMarkets: any;
    bitcoinShareOfMarket: any;
    totalMarketValue: any;
    constructor(private cryptoChartService: CryptoChartService) { 
        this.chart = [];
        this.activeCryptos = [];
        this.activeMarkets = [];
        this.bitcoinShareOfMarket =  [];
  }

  ngOnInit() {
    this.cryptoChartService.bitcoinMarketChart()
        .subscribe((res) => {

            let highPrice = res['Data'].map(res => res.high);
            let lowPrice = res['Data'].map(res => res.low);
            let allDates = res['Data'].map(res => res.time);


            let priceDates = [];

            allDates.forEach((res) => {
                let jsDate = new Date(res * 1000)
                priceDates.push(jsDate.toLocaleTimeString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }))
            })

            this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                    labels: priceDates,
                    datasets: [{
                            data: highPrice,
                            borderColor: '#3cba9f',
                            fill: false
                        },
                        {
                            data: lowPrice,
                            borderColor: '#ffcc00',
                            fill: false
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: true
                        }],
                        yAxes: [{
                            display: true
                        }]
                    }
                }
            })

        })

        this.cryptoChartService.bitcoinDominance()
        .subscribe((res) => {
            console.log(res);
         this.activeCryptos = res['data'].active_cryptocurrencies;
         this.activeMarkets = res['data'].active_markets;
         this.bitcoinShareOfMarket = res['data'].bitcoin_percentage_of_market_cap;
         
        this.totalMarketValue = 100 - this.bitcoinShareOfMarket;
       
         this.donutCanvas = new Chart('donut-canvas', {
            type: 'doughnut',
            data: {
              labels: ["Bitcoin Market Share", "Total Market Value"],
              datasets: [{
                data: [this.bitcoinShareOfMarket, this.totalMarketValue],
                backgroundColor: [
                  '#3cba9f',
                  '#ffcc00'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
            }
          });
      })
    }
}
