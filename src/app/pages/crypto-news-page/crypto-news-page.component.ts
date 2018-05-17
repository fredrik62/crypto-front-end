import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-crypto-news-page',
  templateUrl: './crypto-news-page.component.html',
  styleUrls: ['./crypto-news-page.component.css']
})
export class CryptoNewsPageComponent implements OnInit {
news: any;
newsData: any;
displayData = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {

    this.newsService.getNews()
    .toPromise()
     .then(res => { 
       this.news = res;
       console.log(this.news)
       this.news.forEach(crypto => {
         this.newsData = {
           title: crypto.title,
           image: crypto.imageurl,
           body: crypto.body,
           readMore: crypto.guid
         }
         this.displayData.push(this.newsData);
       });
  })
}

}
