import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  coinInfo: Array<any>
  bitcoin: Array<any> = [];
  ethereum: Array<any> = [];
  ripple: Array<any> = [];
  coinData: any;
 
  constructor(private cryptoService: CryptoService, private router: Router) { }

  ngOnInit() {
    this.cryptoService.getCoinInfo()
        .toPromise()
        .then(res => {
            this.coinInfo = res;
            this.coinInfo.forEach(crypto => {
            
                this.coinData = {
                    id: crypto.id,
                    volume: crypto.quotes.USD.volume_24h,
                    percentage: crypto.quotes.USD.percent_change_24h,
                    price: crypto.quotes.USD.price,
                    name: crypto.name
                }
                switch (this.coinData.id) {
                    case 1:
                        this.bitcoin.push(this.coinData);
                        break;
                    case 52:
                        this.ripple.push(this.coinData);
                        break;
                    case 1027:
                        this.ethereum.push(this.coinData);
                        break;

                }
                
            });
                    if (this.coinData.percentage > 0) {
                        this.coinData.percentage = true;
                    }
            
        });
}

redirectToVolume() {
    this.router.navigate(['gainers']);
}

redirectToCoins() {
    this.router.navigate(['topcoins']);
}

redirectToNews() {
    this.router.navigate(['cryptocurrency-news']);
}

redirectToPortfolio() {
    this.router.navigate(['portfolio']);
}
}