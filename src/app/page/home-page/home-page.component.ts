import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceProductHomePage } from 'src/app/model/product';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/component/modal/modal.component';
import data from 'src/app/data/products.json';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  minValue: number = 1000;
  maxValue: number = 90000;
  insuranceIDArr: number[] | undefined = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;

  products: InsuranceProductHomePage[] = data;

  constructor(

    private service: AppServiceService

  ) { }


  filteredProduct: InsuranceProductHomePage[] = this.products;
  selectedProducts: InsuranceProductHomePage[] = [];
  currentItem = this.filteredProduct;

  isSelectInputRange: boolean = false;

  inputRange(inputRange: any) {
    this.minValue = inputRange.min;
    this.maxValue = inputRange.max;
    this.isSelectInputRange = true;
    // console.log(this.minValue, ' ', this.maxValue);

    this.searchFilter();
  }

  ngOnInit(): void {
    if( this.service.statusCheck.statusColumns1 != undefined || this.service.statusCheck.statusColumns1 != undefined ){
      this.selectedProducts = this.filteredProduct.filter(p => p.id == this.service.statusCheck.statusColumns1 || p.id == this.service.statusCheck.statusColumns2)
    }
   }
  ngAfterViewInit(): void { }
  // search Text
  private _searchText: string = '';
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.searchFilter();
  }

  // filter type of insurance

  _listOfInsureSelected: string[] = [];

  _listOfInsure = [
    { id: 'i1', name: 'Cancer Insurance', isSelected: false },
    { id: 'i2', name: 'Kids Insurance', isSelected: false },
    { id: 'i3', name: 'OPD Package', isSelected: false },
    { id: 'i4', name: 'IPD Package', isSelected: false },
    { id: 'i5', name: 'ICU Coverage', isSelected: false },
  ];

  _listOfAgeSelected: any[] = [];

  _listOfAge = [
    { id: 'a1', name: '0-10', isSelected: false, min: 0, max: 10 },
    { id: 'a2', name: '11-20', isSelected: false, min: 11, max: 20 },
    { id: 'a3', name: '21-50', isSelected: false, min: 21, max: 50 },
    { id: 'a4', name: '51-70', isSelected: false, min: 51, max: 70 },
  ];

  searchFilter() {
    this.filteredProduct = this.products;
    this._listOfInsureSelected = this._listOfInsure
      .filter((x) => x.isSelected == true)
      .map((x) => x.name);
    this._listOfAgeSelected = this._listOfAge.filter(
      (x) => x.isSelected == true
    );



    if (this._searchText != null && this._searchText != '') {
      this.filteredProduct = this.filteredProduct.filter((p) =>
        p.name
          .toLowerCase()
          .replace(/ +/g, '')
          .includes(this._searchText.toLowerCase().replace(/ +/g, ''))
      );
    }

    if (this._listOfInsureSelected.length != 0) {
      let temp: InsuranceProductHomePage[] = [];
      for (let i = 0; i < this._listOfInsureSelected.length; i++) {
        let data: InsuranceProductHomePage[] = []
        for (let j = 0; j < this.filteredProduct.length; j++) {
          for (let k = 0; k < this.filteredProduct[j].typeInsure.length; k++) {
            if (this.filteredProduct[j].typeInsure[k].name.toLowerCase() == this._listOfInsureSelected[i].toLowerCase()) {

              data.push(this.filteredProduct[j]);
            }

          }
        }
        if (data != undefined) {
          temp = [...temp, ...data];
        }
      }
      this.filteredProduct = temp;
    }

    if (this._listOfAgeSelected.length != 0) {
      let temp: InsuranceProductHomePage[] = [];
      for (let i = 0; i < this._listOfAgeSelected.length; i++) {
        let data = this.filteredProduct.filter(
          (p) =>
            (p.minAge >= this._listOfAgeSelected[i].min &&
              p.minAge <=
              this._listOfAgeSelected[i].max) ||
            (p.maxAge >= this._listOfAgeSelected[i].min &&
              p.maxAge <= this._listOfAgeSelected[i].max) ||
            (p.minAge <= this._listOfAgeSelected[i].min &&
              p.maxAge >= this._listOfAgeSelected[i].max)
        );
        if (data != undefined) {
          temp = [...temp, ...data];
        }
      }
      this.filteredProduct = temp.filter(
        (item, index) => temp.indexOf(item) === index
      );
    }

    if (this.isSelectInputRange == true) {
      let temp: InsuranceProductHomePage[] = [];
      for (let i = 0; i < this.filteredProduct.length; i++) {
        let data = this.filteredProduct.filter(
          (p) =>
            p.price <= this.maxValue &&
            p.price >= this.minValue
        );
        if (data != undefined) {
          temp = [...temp, ...data];
        }
      }
      this.filteredProduct = temp.filter(
        (item, index) => temp.indexOf(item) === index
      );
    }
  }
  trackByProduct(index: Number, product: any) {
    return product.id;
  }

  onCheckedProduct(eventData: {
    product: InsuranceProductHomePage;
    selected: boolean;
  }) {



    if (eventData.selected) {
  
      this.selectedProducts.push(eventData.product);
    } else {
      this.selectedProducts = this.selectedProducts.filter(
        (product) =>
          product.id !==
          eventData.product.id
      );
    }

    if (this.selectedProducts.length > 2) {
      this.modal.open();
    }

    this.insuranceIDArr = this.selectedProducts.map((item: InsuranceProductHomePage) => {
      return item.id
    })

    //console.log(this.selectedProducts);


    this.service.statusCheck.statusColumns1 = this.insuranceIDArr[0]
    this.service.statusCheck.statusColumns2 = this.insuranceIDArr[1]
    //console.log("🚀 ~ file: home-page.component.ts ~ line 161 ~ HomePageComponent ~ selected", eventData.selected)


  }
}
