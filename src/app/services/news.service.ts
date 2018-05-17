import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
result: any;
  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN`)
    .map(result => this.result = Object.values(result["Data"]))
  }
}
