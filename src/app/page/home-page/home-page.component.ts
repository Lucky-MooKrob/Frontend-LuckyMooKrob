import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { InsuranceProduct } from 'src/app/model/product';
import { Options } from "@angular-slider/ngx-slider";
import { MultiRangeSliderComponent } from 'src/app/component/multi-range-slider/multi-range-slider.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  minValue:number = 1000;
  maxValue:number = 200000;

  products: InsuranceProduct[] = [
    {
      insuranceMiniDetailsID: 1,
      insuranceMiniDetailsName: " 1 MY FIRST CLASS @BDMS HEALTH INSURANCE 6 – 70 Years 83,305",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 83305 ,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 6,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "cancer"

    },
    {
      insuranceMiniDetailsID: 2,
      insuranceMiniDetailsName: "2 MY HEALTH PLUS DOUBLE CARE HEALTH INSURANCE 11 – 70 Years 19,992 ",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 19992,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 11,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "cancer"

    },
    {
      insuranceMiniDetailsID: 3,
      insuranceMiniDetailsName: "3 MY HEALTH PLUS SABAI KAPAO HEALTH INSURANCE 11 - 69 Years 14,355",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 14355,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 11,
      insuranceMiniDetailsEndAge: 69,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 4,
      insuranceMiniDetailsName: " 4 MAO MAO KIDS HEALTH INSURANCE 1 Month 1 Day - 10 Years 48,231",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 48231,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 10,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 5,
      insuranceMiniDetailsName: " 5 OPD MAO MAO KIDS HEALTH INSURANCE 1 Month 1 Day - 10 Years 8738",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 8738,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 10,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 6,
      insuranceMiniDetailsName: " 6 DAILY HOSPITALISATION ALLOWANCE HEALTH INSURANCE 11-60 Years 1464",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 1464,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 11,
      insuranceMiniDetailsEndAge: 60,
      insuranceMiniDetailsDisease: "cancer"
    },
    {
      insuranceMiniDetailsID: 7,
      insuranceMiniDetailsName: " 7 SPECIAL DAILY HOSPITALISATION ALLOWANCE HEALTH INSURANCE 1 1 Year 1 Day - 60 Years 2,500 THB/Year",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 2500 ,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 1,
      insuranceMiniDetailsEndAge: 60,
      insuranceMiniDetailsDisease: "Cardiovascular"

    },
    {
      insuranceMiniDetailsID: 8,
      insuranceMiniDetailsName: " 8 ICU HOSPITALISATION ALLOWANCE HEALTH INSURANCE 1 Year 1 Day -70 Years 7,960 THB/Year",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 7960 ,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 1,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 9,
      insuranceMiniDetailsName: "9 MY CI CARE HEALTH INSURANCE 16 - 55 Years 23,345 THB/Year",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 23345,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 16,
      insuranceMiniDetailsEndAge: 55,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 10,
      insuranceMiniDetailsName: "10 MY CI 48 BEYOND HEALTH INSURANCE 1 Month 1 Day -70 Years 5,336 THB/Year",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 5336,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Cardiovascular"
    },
    {
      insuranceMiniDetailsID: 11,
      insuranceMiniDetailsName: "11 MY CI 48 HEALTH INSURANCE 16-60 Years 4,000 THB/Year",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 4000 ,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 16,
      insuranceMiniDetailsEndAge: 60,
      insuranceMiniDetailsDisease: "Chronic respiratory"

    },
    {
      insuranceMiniDetailsID: 12,
      insuranceMiniDetailsName: "12 CANCER CBN HEALTH INSURANCE 16-60 Years 18,168 ",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 18168 ,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 16,
      insuranceMiniDetailsEndAge: 60,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 13,
      insuranceMiniDetailsName: "13 CANCER JIB JIB HEALTH INSURANCE 3 1-50 Years 6000",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 6000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 1,
      insuranceMiniDetailsEndAge: 50,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 14,
      insuranceMiniDetailsName: "14 HS HEALTH INSURANCE 11 - 70 Years 11000",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 11000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 11,
      insuranceMiniDetailsEndAge: 70,
      insuranceMiniDetailsDisease: "Chronic respiratory"
    },
    {
      insuranceMiniDetailsID: 15,
      insuranceMiniDetailsName: "15 OPD HS HEALTH INSURANCE 1 Month 1 Day –  60 Years 12000",
      insuranceMiniDetailsPic: "https://image.bangkokbiznews.com/image/kt/media/image/news/2020/09/10/897354/750x422_897354_1599783351.jpg?x-image-process=style/LG",
      insuranceMiniDetailsPrice: 12000,
      insuranceMiniDetailsFBulletin: "คุ้มครองค่ารักษาพยาบาลด้วยโรคติดเชื้อและอุบัติเหตุ พร้อมบริการปรึกษาหมอออนไลน์",
      insuranceMiniDetailsSBulletin: "รับประกันภัยทั้งคนไทยและต่างชาติ ที่อาศัยอยู่ในประเทศไทย",
      insuranceMiniDetailsTBulletin: "1234567890123456789012345678901234567890123456789012345678901234567890",
      insuranceMiniDetailsStartAge: 0,
      insuranceMiniDetailsEndAge: 60,
      insuranceMiniDetailsDisease: "Diabetes mellitus"

    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }


  filteredProduct: InsuranceProduct[] = this.products;

  currentItem = this.filteredProduct;

  isSelectInputRange: boolean =false;

  inputRange(inputRange: any) {
    this.minValue = inputRange.min;
    this.maxValue = inputRange.max; 
    this.isSelectInputRange = true;
    console.log(this.minValue," ",this.maxValue);
    
    this.searchFilter();
  }

  

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

  _listOfAgeSelected: any[] = [];

  _listOfAge = [
    { id: "a1", name: "0-10", isSelected: false ,min:0 , max:10},
    { id: "a2", name: "11-20", isSelected: false ,min:11 , max:20},
    { id: "a3", name: "21-50", isSelected: false ,min:21, max:50},
    { id: "a4", name: "51-70", isSelected: false ,min:51 , max:70},
    
  ]


  searchFilter(){
    
    this.filteredProduct = this.products;
    this._listOfDiseaseSelected = this._listOfDisease.filter(x => x.isSelected == true).map(x => x.name);
    this._listOfAgeSelected = this._listOfAge.filter(x=>x.isSelected == true)
    console.log(this._listOfAgeSelected);
    
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

    if(this._listOfAgeSelected.length != 0){
      let temp: InsuranceProduct[]=[];
      for (let i = 0; i < this._listOfAgeSelected.length; i++) {
        let data = this.filteredProduct.filter(p => (p.insuranceMiniDetailsStartAge >= this._listOfAgeSelected[i].min && p.insuranceMiniDetailsStartAge <= this._listOfAgeSelected[i].max) ||
                                (p.insuranceMiniDetailsEndAge >= this._listOfAgeSelected[i].min && p.insuranceMiniDetailsEndAge <= this._listOfAgeSelected[i].max) || 
                                (p.insuranceMiniDetailsStartAge <= this._listOfAgeSelected[i].min && p.insuranceMiniDetailsEndAge >= this._listOfAgeSelected[i].max));
        if (data != undefined) {
           temp = [...temp,...data]
        }
      }
      this.filteredProduct = temp.filter((item, index) => temp.indexOf(item) === index);
    }

    if(this.isSelectInputRange == true){
      let temp: InsuranceProduct[]=[];
      for (let i = 0; i < this.filteredProduct.length; i++) {
        let data = this.filteredProduct.filter(p => p.insuranceMiniDetailsPrice <= this.maxValue && p.insuranceMiniDetailsPrice >= this.minValue);
        if (data != undefined) {
           temp = [...temp,...data]
        }
      }
      this.filteredProduct = temp.filter((item, index) => temp.indexOf(item) === index);
    } 
    
  }

}





