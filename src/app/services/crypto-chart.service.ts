import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoChartService {

  constructor(private httpClient: HttpClient) { }

  bitcoinMarketChart() {
   return this.httpClient.get("https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10")
   .map(result =>  result);
  }
   
  bitcoinDominance() {
    return this.httpClient.get("https://api.coinmarketcap.com/v2/global/")
   .map(result =>  result);

  }


}
