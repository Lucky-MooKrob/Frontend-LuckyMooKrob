import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';


import data1 from 'src/app/data/compare-product.json';
import { InsuranceProductComparePage } from 'src/app/model/product';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {

  colunm1 = this.service.statusCheck.statusColumns1;
  colunm2 = this.service.statusCheck.statusColumns2;
  display1 = false;
  display2 = false;

  product1: InsuranceProductComparePage[] = data1;
  filteredProduct1: InsuranceProductComparePage[] = this.product1;
  filteredProduct2: InsuranceProductComparePage[] = this.product1;

  constructor(

    private service: AppServiceService

  ) { }

  ngOnInit(): void {

    this.showFiltedProduct1()
    this.showFiltedProduct2()
    this.createColumn()
    console.log("🚀 ~ file: compare-page.component.ts ~ line 44 ~ ComparePageComponent ~ createColumn ~ this.colunm1", this.colunm1)
    console.log("🚀 ~ file: compare-page.component.ts ~ line 45 ~ ComparePageComponent ~ createColumn ~ this.colunm2", this.colunm2)

    

  }

  createColumn() {
    if (this.colunm1 !== undefined && this.colunm2 !== undefined) {
      this.display1 = true
      this.display2 = true
    }

    if (this.colunm1 !== undefined && this.colunm2 === undefined) {
      this.display1 = true
      this.display2 = false
    }

    if (this.colunm1 === undefined && this.colunm2 === undefined) {
      this.display1 = false
      this.display2 = false
    }

    if (this.colunm1 === undefined && this.colunm2 !== undefined) {
      this.display1 = false
      this.display2 = true
    }
  }

  showFiltedProduct1() {

    this.filteredProduct1 = this.filteredProduct1.filter((p) => {
      return p.id === this.colunm1
    })
  }
  showFiltedProduct2() {

    this.filteredProduct2 = this.filteredProduct2.filter((p) => {
      return p.id === this.colunm2
    })
  }

}
