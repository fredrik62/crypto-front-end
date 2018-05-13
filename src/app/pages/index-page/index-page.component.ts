import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  coinInfo: Array<any>;
  bitcoin: Array<any> = [];
  bitcoinInfo: Array<any>;
  ethereum: Array<any> = [];
  ethereumInfo: Array<any>;
  ripple: Array<any> = [];
  rippleInfo: Array<any>;
  displayColor: Array<any> = [];
  constructor(private cryptoService: CryptoService, private router: Router) { }

  ngOnInit() {
    this.cryptoService.getCoinInfo()
     .subscribe(res => { 
       this.coinInfo = res;
      //console.log(this.coinInfo);
       // bitcoin data in market information boxes
       this.bitcoin.push(this.coinInfo[0]);
       this.bitcoinInfo = this.bitcoin[0].quotes.USD;
      
       this.ethereum.push(this.coinInfo[18]);
       this.ethereumInfo = this.ethereum[0].quotes.USD;
       

       this.ripple.push(this.coinInfo[2]);
       this.rippleInfo = this.ripple[0].quotes.USD;
      
      /*  this.displayColor.push(this.bitcoinInfo, this.ethereumInfo, this.rippleInfo);
        console.log(this.displayColor);
        
       this.displayColor.forEach((crypto) => {
        let changeToday = crypto.quotes.USD.percent_change_24h;
        console.log(changeToday);
        if (changeToday > 0) {
          crypto.quotes.USD.positive = true;
        } else {
          crypto.quotes.USD.positive = false;
        }
      })
      */
     });
  }

  redirectToVolume() {
    console.log("function called");
    this.router.navigate(['gainers']);
  }
  
  redirectToCoins() {
    console.log("function called");
    this.router.navigate(['topcoins']);
  }

  redirectToNews() {
    console.log("function called");
    this.router.navigate(['cryptocurrency-news']);
  }

  redirectToPortfolio() {
    console.log("function called");
    this.router.navigate(['portfolio']);
  }
}
