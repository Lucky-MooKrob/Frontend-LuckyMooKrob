import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { InsuranceProductHomePage } from 'src/app/model/product';
import data from 'src/app/data/products.json';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-mini',
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss'],
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

  item1 = this.service.statusCheck.statusColumns1
  item2 = this.service.statusCheck.statusColumns2


  constructor(
    private service: AppServiceService

  ) {}

  CheckedProduct: InsuranceProductHomePage[] = []

  ngOnInit(): void {
    
    //this.CheckedProduct = this.CheckedProduct.filter(p=>p.id == this.service.statusCheck.statusColumns1 || p.id == this.service.statusCheck.statusColumns2)
  }

  onChanged(event: any) {
    this.selectedProduct.emit({
      product: this.product,
      selected: event.currentTarget.checked,
    });
    //console.log("🚀 ~ file: card-mini.component.ts ~ line 35 ~ CardMiniComponent ~ onChanged ~ selected", this.selectedProduct)
    this.onChecked()
  }

  onChecked(){
    this.CheckedProduct = data
    this.CheckedProduct = this.CheckedProduct.filter(p=>p.id == this.service.statusCheck.statusColumns1 || p.id == this.service.statusCheck.statusColumns2)
    
  }
}
