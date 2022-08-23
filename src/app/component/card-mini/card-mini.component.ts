import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InsuranceProductHomePage } from 'src/app/model/product';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss']
})
export class CardMiniComponent implements OnInit {

  @Input() product: InsuranceProductHomePage = {
    id: 0,
    name: "",
    price: 0,
    pic: "",
    miniPic: "",
    minAge: 0,
    maxAge: 0,
    bullets: [],
    typeInsure:[]
  };
  @Output() selectedProduct = new EventEmitter<{
    product: InsuranceProductHomePage;
    selected: boolean;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onChanged(event: any) {
    this.selectedProduct.emit({
      product: this.product,
      selected: event.currentTarget.checked,
    });
  }

}
