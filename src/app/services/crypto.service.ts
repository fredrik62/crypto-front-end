import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoService {
 result: any;
  constructor(private httpClient: HttpClient) { }

  getCoinInfo() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`https://api.coinmarketcap.com/v2/ticker/`)
     .map(result => this.result = Object.values(result["data"]))
  }

  getOneCoin(id: string) {
    return this.httpClient.get(`https://api.coinmarketcap.com/v2/ticker/${id}/`)
    .map(result =>  result);
  }
}
