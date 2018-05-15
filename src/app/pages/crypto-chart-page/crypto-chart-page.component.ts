import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crypto-chart-page',
  templateUrl: './crypto-chart-page.component.html',
  styleUrls: ['./crypto-chart-page.component.css']
})
export class CryptoChartPageComponent implements OnInit {
  chart: any;
  cryptos: any;
  priceToday: String;
  volumeToday: String;
  timeStamp: String;
  positive: boolean;
  priceDates = [];
  coinData: any = [];
  desktopDisplay: boolean = window.innerWidth > 400;

  @HostListener('window:resize') resizeDetection() { 
    this.desktopDisplay = window.innerWidth > 800;
    this.chart.options.scales.xAxes[0].ticks.display = window.innerWidth > 800;
  }
  
  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) {
      
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      const id = params.id;
      this.cryptoService.getOneCoin(id)
          .toPromise()
          .then((res) => {
              this.cryptos = res;
              const name = this.cryptos.data.symbol;
                
              this.coinData = {
                   coinName: this.cryptos.data.name,
                   coinRank: this.cryptos.data.rank,
                   circulatingSupply: this.cryptos.data.circulating_supply,
                   maxSupply: this.cryptos.data.max_supply,
                   coinPrice: this.cryptos.data.quotes.USD.price,
                   percentageHour: this.cryptos.data.quotes.USD.percent_change_1h,
                   percentageDaily: this.cryptos.data.quotes.USD.percent_change_24h,
                   percentageWeekly: this.cryptos.data.quotes.USD.percent_change_7d
               
              }
          
          
              this.cryptoService.getOneCoinChart(name)
                  .toPromise()
                  .then((res) => {
                      let highPrice = res['Data'].map(res => res.high);
                      let lowPrice = res['Data'].map(res => res.low);
                      let allDates = res['Data'].map(res => res.time);
                      
                      
                      
  
                      
  
                      allDates.forEach((res) => {
                          let jsDate = new Date(res * 1000)
                          this.priceDates.push(jsDate.toLocaleTimeString('en', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                          }))
                      })
                        
                      
                      this.chart = new Chart('canvas', {
                          type: 'line',
                          data: {
                              labels: this.priceDates,
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
  
          })
  })
  }
  }