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
  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      const id = params.id;
      this.cryptoService.getOneCoin(id)
          .toPromise()
          .then((res) => {
              this.cryptos = res;
              
     
              this.coinName = this.cryptos.data.name;
              this.coinRank = this.cryptos.data.rank;
              this.circulatingSupply = this.cryptos.data.circulating_supply;
              this.maxSupply = this.cryptos.data.max_supply;
     
              this.priceToday = this.cryptos.data.quotes.USD.price;
              this.volumeToday = this.cryptos.data.quotes.USD.volume_24h;
     
              this.percentageHour = this.cryptos.data.quotes.USD.percent_change_1h;
              this.percentageDaily = this.cryptos.data.quotes.USD.percent_change_24h;
              this.percentageWeekly = this.cryptos.data.quotes.USD.percent_change_7d;
     
     
     
              let jsDate = new Date(this.cryptos.metadata.timestamp * 1000)
              this.timeStamp = (jsDate.toLocaleTimeString('en', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
              }))
     
     
              this.chart = new Chart('canvas', {
                  type: 'line',
                  data: {
                      labels: this.timeStamp,
                      datasets: [{
                              data: this.priceToday,
                              borderColor: '#3cba9f',
                              fill: false
                          },
                          {
                              data: this.volumeToday,
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
     
     
     
      });
     
      };
      }
      