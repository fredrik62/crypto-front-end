import { Component, OnInit } from '@angular/core';
import { CryptoChartService } from '../../services/crypto-chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut-canvas',
  templateUrl: './donut-canvas.component.html',
  styleUrls: ['./donut-canvas.component.css']
})
export class DonutCanvasComponent implements OnInit {
  donutCanvas: any;
  activeCryptos: any;
  activeMarkets: any;
  bitcoinShareOfMarket: any;
  totalMarketValue: any;
  constructor(private cryptoChartService: CryptoChartService) { }

  ngOnInit() {
    this.cryptoChartService.bitcoinDominance()
      .toPromise()
      .then((res) => {

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
                '#f7931a',
                '#f0f0f0'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            elements: {
              center: {
                text: this.bitcoinShareOfMarket + '%'
              }
            },
            cutoutPercentage: 55,
            legend: {
              display: true,
              labels: {
                fontSize: 30
              }
            }
          }
        });
      })
  }

}
