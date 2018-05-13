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
  activeCryptos: any;
  activeMarkets: any;
  bitcoinShareOfMarket: any;
  constructor(private cryptoChartService: CryptoChartService) { }

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
         this.activeCryptos = res['data'].active_cryptocurrencies;
         this.activeMarkets = res['data'].active_markets;
         this.bitcoinShareOfMarket = res['data'].bitcoin_percentage_of_market_cap;
       
      })
    }
}
