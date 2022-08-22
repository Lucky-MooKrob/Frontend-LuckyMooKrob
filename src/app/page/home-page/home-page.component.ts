import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { InsuranceProduct } from 'src/app/model/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  products: InsuranceProduct[] = [
    {
      insuranceMiniDetailsID: 1,
      insuranceMiniDetailsName: "First class  Cancer insurance 1 0-30",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 30000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 30,
      insuranceMiniDetailsDisease: "cancer"

    },
    {
      insuranceMiniDetailsID: 2,
      insuranceMiniDetailsName: "First class  Cancer insurance 2 31-40",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 40000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 31,
      insuranceMiniDetailsEndAge: 40,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 3,
      insuranceMiniDetailsName: "First class  Cancer insurance 3 41-50",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 50000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 41,
      insuranceMiniDetailsEndAge: 50,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 4,
      insuranceMiniDetailsName: "First class  Cancer insurance 51-70",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 60000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 51,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 5,
      insuranceMiniDetailsName: "First class  Cardiovascular insurance 1 0-30",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 30000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 30,
      insuranceMiniDetailsDisease: "Cardiovascular"

    },
    {
      insuranceMiniDetailsID: 6,
      insuranceMiniDetailsName: "First class  Cardiovascular insurance 2 31-40",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 40000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 31,
      insuranceMiniDetailsEndAge: 40,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 7,
      insuranceMiniDetailsName: "First class  Cardiovascular insurance 3 41-50",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 50000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 41,
      insuranceMiniDetailsEndAge: 50,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 8,
      insuranceMiniDetailsName: "First class  Cardiovascular insurance 51-70",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 60000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 51,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 9,
      insuranceMiniDetailsName: "First class  Chronic respiratory insurance 1 0-30",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 30000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 30,
      insuranceMiniDetailsDisease: "Chronic respiratory"

    },
    {
      insuranceMiniDetailsID: 10,
      insuranceMiniDetailsName: "First class  Chronic respiratory insurance 2 31-40",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 40000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 31,
      insuranceMiniDetailsEndAge: 40,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 11,
      insuranceMiniDetailsName: "First class  Chronic respiratory insurance 3 41-50",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 50000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 41,
      insuranceMiniDetailsEndAge: 50,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 12,
      insuranceMiniDetailsName: "First class  Chronic respiratory insurance 51-70",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 60000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 51,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 13,
      insuranceMiniDetailsName: "First class  Diabetes mellitus insurance 1 0-30",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 30000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 30,
      insuranceMiniDetailsDisease: "Diabetes mellitus"

    },
    {
      insuranceMiniDetailsID: 14,
      insuranceMiniDetailsName: "First class  Diabetes mellitus insurance 2 31-40",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 40000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 31,
      insuranceMiniDetailsEndAge: 40,
      insuranceMiniDetailsDisease: "Diabetes mellitus"
    },
    {
      insuranceMiniDetailsID: 15,
      insuranceMiniDetailsName: "First class  Diabetes mellitus insurance 3 41-50",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 50000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 41,
      insuranceMiniDetailsEndAge: 50,
      insuranceMiniDetailsDisease: "Diabetes mellitus"
    },
    {
      insuranceMiniDetailsID: 16,
      insuranceMiniDetailsName: "First class  Diabetes mellitus insurance 51-70",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 60000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 51,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Diabetes mellitus"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


  filteredProduct: InsuranceProduct[] = this.products;

  // search Text
  private _searchText: string = '';
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.searchFilter();
  }

  // filter type of disease

  _listOfDiseaseSelected: string[] = [];

  _listOfDisease = [
    { id: "d1", name: "Cancer", isSelected: false },
    { id: "d2", name: "Cardiovascular", isSelected: false },
    { id: "d3", name: "Chronic respiratory", isSelected: false },
    { id: "d4", name: "Diabetes mellitus", isSelected: false },
    { id: "d5", name: "Other", isSelected: false },
  ]


  searchFilter(){
    
    this.filteredProduct = this.products;
    this._listOfDiseaseSelected = this._listOfDisease.filter(x => x.isSelected == true).map(x => x.name);

    if(this._searchText != null && this._searchText != ''){
      this.filteredProduct = this.filteredProduct.filter(p=> p.insuranceMiniDetailsName.toLowerCase().replace(/ +/g, "").includes(this._searchText.toLowerCase().replace(/ +/g, "")));
    }

    if(this._listOfDiseaseSelected.length != 0){
      let temp: InsuranceProduct[]=[];
      for (let i = 0; i < this._listOfDiseaseSelected.length; i++) {
        let data = this.filteredProduct.filter(p => p.insuranceMiniDetailsDisease.toLowerCase().replace(/ +/g, "") == this._listOfDiseaseSelected[i].toLowerCase().replace(/ +/g, ""));
        if (data != undefined) {
           temp = [...temp,...data]
        }
      }
      this.filteredProduct = temp;
    } 
  }

}





