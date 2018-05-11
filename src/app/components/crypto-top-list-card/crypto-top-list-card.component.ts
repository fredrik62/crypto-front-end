import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-top-list-card',
  templateUrl: './crypto-top-list-card.component.html',
  styleUrls: ['./crypto-top-list-card.component.css']
})
export class CryptoTopListCardComponent implements OnInit {
  @Input() cryptos: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  coinGraphRedirect(id){
    console.log("function called");
      this.router.navigate(['topcoins', id]);
  }

}
