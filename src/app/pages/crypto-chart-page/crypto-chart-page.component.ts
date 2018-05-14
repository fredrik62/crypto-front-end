import { Component, OnInit, Input } from '@angular/core';
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
  chart = [];
  cryptos: any;
  priceToday: String;
  volumeToday: String;
  coinRank: String;
  coinName: String;
  circulatingSupply: String;
  maxSupply: String;
  percentageHour: String;
  percentageDaily: String;
  percentageWeekly: String;
  timeStamp: String;
  priceDates = [];
  
  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      const id = params.id;
      this.cryptoService.getOneCoin(id)
          .toPromise()
          .then((res) => {
              this.cryptos = res;
              const name = this.cryptos.data.symbol;
              this.coinName = this.cryptos.data.name;
              this.coinRank = this.cryptos.data.rank;
              this.circulatingSupply = this.cryptos.data.circulating_supply;
              this.maxSupply = this.cryptos.data.max_supply;
              this.percentageHour = this.cryptos.data.quotes.USD.percent_change_1h;
              this.percentageDaily = this.cryptos.data.quotes.USD.percent_change_24h;
              this.percentageWeekly = this.cryptos.data.quotes.USD.percent_change_7d;
  
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
                        console.log(this.priceDates);
                      this.chart = new Chart('canvas', {
                          type: 'line',
                          data: {
                              labels: this.priceDates,
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
  
          })
  })
  }
  }