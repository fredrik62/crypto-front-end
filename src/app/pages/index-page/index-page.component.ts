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
	coinsToDisplay = [];
	bitcoin: Array<any> = [];
	ethereum: Array<any> = [];
	ripple: Array<any> = [];
	coinData: any;
	coinImages = ['bitcoin-logo-orange.png', 'eth-logo-blue.png', 'ripple-logo-grey.png']

	constructor(private cryptoService: CryptoService, private router: Router) { }

	ngOnInit() {
		this.cryptoService.getCoinInfo()
			.toPromise()
			.then(res => {
				this.coinInfo = res;
				this.coinInfo.forEach(crypto => {
					if (crypto.id === 1 || crypto.id === 52 || crypto.id === 1027) {
						this.coinData = {
							id: crypto.id,
							volume: crypto.quotes.USD.volume_24h,
							percentage: crypto.quotes.USD.percent_change_24h,
							price: crypto.quotes.USD.price,
							name: crypto.name
						};
						if (this.coinData.percentage > 0) {
							this.coinData.positiveChange = true;
						}
						this.coinsToDisplay.push(this.coinData);
          }
				});
			})
	};

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

