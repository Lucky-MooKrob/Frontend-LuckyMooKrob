import { Component, Input, OnInit } from '@angular/core';
import { InsuranceProduct } from 'src/app/model/product';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss']
})
export class CardMiniComponent implements OnInit {

  @Input() item :InsuranceProduct[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
