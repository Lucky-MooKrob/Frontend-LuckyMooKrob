import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { InsuranceProduct } from 'src/app/model/product';
@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss']
})
export class CardMiniComponent implements OnInit {

  @Input() item :InsuranceProduct = {
    insuranceMiniDetailsID: 0,
    insuranceMiniDetailsName: '',
    insuranceMiniDetailsPic: '',
    insuranceMiniDetailsPrice: 0,
    insuranceMiniDetailsFBulletin: '',
    insuranceMiniDetailsSBulletin: '',
    insuranceMiniDetailsTBulletin: '',
    insuranceMiniDetailsStartAge: 0,
    insuranceMiniDetailsEndAge: 0,
    insuranceMiniDetailsDisease: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
