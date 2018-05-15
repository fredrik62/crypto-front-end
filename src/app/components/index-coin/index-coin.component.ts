import { Component, OnInit, HostListener } from '@angular/core';
import { CryptoChartService } from '../../services/crypto-chart.service';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-index-coin',
  templateUrl: './index-coin.component.html',
  styleUrls: ['./index-coin.component.css']
})
export class IndexCoinComponent implements OnInit {
    chart:any;
    donutCanvas: any;
    activeCryptos: any;
    activeMarkets: any;
    bitcoinShareOfMarket: any;
    totalMarketValue: any;
    desktopDisplay: boolean = window.innerWidth > 400;
    @HostListener('window:resize') resizeDetection() { 
        this.desktopDisplay = window.innerWidth > 800;
        this.chart.options.scales.xAxes[0].ticks.display = window.innerWidth > 800;
      }
    constructor(private cryptoChartService: CryptoChartService) { 
        this.chart = [];
        this.activeCryptos = [];
        this.activeMarkets = [];
        this.bitcoinShareOfMarket =  [];
  }

  ngOnInit() {
    this.cryptoChartService.bitcoinMarketChart()
    .toPromise()
        .then((res) => {

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
                            borderColor: '#f7931a',
                            fill: false
                        },
                        {
                            data: lowPrice,
                            borderColor: '#f0f0f0',
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
                            display: this.desktopDisplay
                        }],
                        yAxes: [{
                            display: true
                        }]
                    }
                }
            })

        })

        this.cryptoChartService.bitcoinDominance()
        .toPromise()
        .then((res) => {
 
            this.activeCryptos = res['data'].active_cryptocurrencies;
            this.activeMarkets = res['data'].active_markets;
            this.bitcoinShareOfMarket = res['data'].bitcoin_percentage_of_market_cap;
 
            this.totalMarketValue = 100 - this.bitcoinShareOfMarket;
 
 
            Chart.pluginService.register({
                beforeDraw: function(chart) {
                    const width = chart.chart.width,
                        height = chart.chart.height,
                        ctx = chart.chart.ctx;
                    ctx.restore();
                    const fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = '#f7931a';
                    const text = chart.options.elements.center.text,
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            });
 
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
                    cutoutPercentage: 75,
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