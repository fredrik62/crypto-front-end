import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crypto-top-increase-page',
  templateUrl: './crypto-top-increase-page.component.html',
  styleUrls: ['./crypto-top-increase-page.component.css']
})
export class CryptoTopIncreasePageComponent implements OnInit {
  cryptos: any;
  topIncrease: Array < any > = [];
  timeUpdate: Array < any > = [];

  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.cryptoService.getCoinInfo()
          .toPromise()
          .then((res) => {
              this.cryptos = res;
              

              
                let jsDate = new Date(this.cryptos[0].last_updated * 1000)
                this.timeUpdate.push(jsDate.toLocaleTimeString('en', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }))
                
           
              this.cryptos.forEach(crypto => {
                  let increase = {
                      percentage: crypto.quotes.USD.percent_change_7d,
                      name: crypto.name,
                      coinId: crypto.id,
                      coinPrice: crypto.quotes.USD.price,
                      symbol: crypto.symbol
                  }
                  if (increase.percentage > 5) {
                      this.topIncrease.push(increase);
                  }

              });


          })
  }
  coinGraphRedirect(id) {
      this.router.navigate(['gainers', id]);
  }

  }