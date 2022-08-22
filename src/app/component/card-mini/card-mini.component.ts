import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { InsuranceProduct } from 'src/app/model/product';
@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss'],
})
export class CardMiniComponent implements OnInit {
  @Input() product: InsuranceProduct = {
    insuranceMiniDetailsID: 0,
    insuranceMiniDetailsName: '',
    insuranceMiniDetailsPic: '',
    insuranceMiniDetailsPrice: 0,
    insuranceMiniDetailsFBulletin: '',
    insuranceMiniDetailsSBulletin: '',
    insuranceMiniDetailsTBulletin: '',
    insuranceMiniDetailsStartAge: 0,
    insuranceMiniDetailsEndAge: 0,
    insuranceMiniDetailsDisease: '',
  };
  @Output() selectedProduct = new EventEmitter<{
    product: InsuranceProduct;
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
