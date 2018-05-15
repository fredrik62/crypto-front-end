import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-top-list-page',
  templateUrl: './crypto-top-list-page.component.html',
  styleUrls: ['./crypto-top-list-page.component.css']
})
export class CryptoTopListPageComponent implements OnInit {
  cryptos: Array<any>;
  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cryptoService.getCoinInfo()
    .toPromise()
     .then(res => { 
       this.cryptos = res;
       this.cryptos.forEach((crypto) => {
          let changeToday = crypto.quotes.USD.percent_change_24h;
          if (changeToday > 0) {
            crypto.quotes.USD.positive = true;
          } else {
            crypto.quotes.USD.positive = false;
          }
        })

       });
      }
  }