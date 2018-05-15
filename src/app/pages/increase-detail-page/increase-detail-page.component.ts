import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-increase-detail-page',
  templateUrl: './increase-detail-page.component.html',
  styleUrls: ['./increase-detail-page.component.css']
})
export class IncreaseDetailPageComponent implements OnInit {
 
  constructor(private cryptoService: CryptoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
