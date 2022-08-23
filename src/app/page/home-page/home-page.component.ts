import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { InsuranceProductHomePage } from 'src/app/model/product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  minValue: number = 1000;
  maxValue: number = 90000;

  products: InsuranceProductHomePage[] = [
    {
      "id": 1,
      "name": "MY FIRST CLASS @BDMS HEALTH INSURANCE",
      "price": 83305,
      "pic": "./assets/insurance_pic/1/pic.jpeg",
      "miniPic": "./assets/insurance_pic/1/mini_pic.jpeg",
      "minAge": 6,
      "maxAge": 70,
      "bullets": [
        {
          "id": 1,
          "insureId": 1,
          "name": "Benefit limit up to 120 million baht per policy year. Covering all medical treatments"
        },
        {
          "id": 2,
          "insureId": 1,
          "name": "Coverage for preventive treatment, including vaccinations, up to 80,000 baht."
        },
        {
          "id": 3,
          "insureId": 1,
          "name": "Special care services throughout the illness and Emergency medical assistance service"
        }
      ],
      "typeInsure": [
        {
          "id": 5,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 1
        },
        {
          "id": 11,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 1
        },
        {
          "id": 17,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 1
        }
      ]
    },
    {
      "id": 3,
      "name": "MY HEALTH PLUS SABAI KAPAO HEALTH INSURANCE",
      "price": 14355,
      "pic": "./assets/insurance_pic/3/pic.jpeg",
      "miniPic": "./assets/insurance_pic/3/mini_pic.jpeg",
      "minAge": 11,
      "maxAge": 69,
      "bullets": [
        {
          "id": 7,
          "insureId": 3,
          "name": "Great value with premiums, get coverage up to 1 million baht per policy year."
        },
        {
          "id": 8,
          "insureId": 3,
          "name": "Cost-effective with X-ray fees, lab fees, medical expenses for surgery, dialysis"
        },
        {
          "id": 9,
          "insureId": 3,
          "name": "Worth more than worth, with medical expenses in the ICU room, paid accordingly."
        }
      ],
      "typeInsure": [
        {
          "id": 7,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 3
        },
        {
          "id": 13,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 3
        },
        {
          "id": 19,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 3
        }
      ]
    },
    {
      "id": 2,
      "name": "MY HEALTH PLUS DOUBLE CARE HEALTH INSURANCE",
      "price": 19992,
      "pic": "./assets/insurance_pic/2/pic.jpeg",
      "miniPic": "./assets/insurance_pic/2/mini_pic.jpeg",
      "minAge": 11,
      "maxAge": 70,
      "bullets": [
        {
          "id": 4,
          "insureId": 2,
          "name": "Receive a maximum plan benefit amount of 8 million baht per policy year."
        },
        {
          "id": 5,
          "insureId": 2,
          "name": "Actual medical expenses such as x-rays, lab fees, surgery, dialysis, chemotherapy"
        },
        {
          "id": 6,
          "insureId": 2,
          "name": "Continuous care after leaving the hospital, including rehabilitation medicine"
        }
      ],
      "typeInsure": [
        {
          "id": 6,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 2
        },
        {
          "id": 12,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 2
        },
        {
          "id": 18,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 2
        }
      ]
    },
    {
      "id": 4,
      "name": "MAO MAO KIDS HEALTH INSURANCE",
      "price": 48231,
      "pic": "./assets/insurance_pic/4/pic.jpeg",
      "miniPic": "./assets/insurance_pic/4/mini_pic.jpeg",
      "minAge": 0,
      "maxAge": 10,
      "bullets": [
        {
          "id": 10,
          "insureId": 4,
          "name": "Benefit limit up to 1.2 million baht per policy year."
        },
        {
          "id": 11,
          "insureId": 4,
          "name": "Actual medical expenses such as surgery, x-ray, lab, emergency accidents within 24 hours."
        },
        {
          "id": 12,
          "insureId": 4,
          "name": "No allowance required. When being treated in the Allianz Ayudhya Network Hospital."
        }
      ],
      "typeInsure": [
        {
          "id": 3,
          "typeId": 2,
          "name": "Kids Insurance",
          "insureId": 4
        },
        {
          "id": 8,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 4
        },
        {
          "id": 14,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 4
        }
      ]
    },
    {
      "id": 5,
      "name": "OPD MAO MAO KIDS HEALTH INSURANCE",
      "price": 8783,
      "pic": "./assets/insurance_pic/5/pic.jpeg",
      "miniPic": "./assets/insurance_pic/5/mini_pic.jpeg",
      "minAge": 0,
      "maxAge": 10,
      "bullets": [
        {
          "id": 13,
          "insureId": 5,
          "name": "Visiting medical docor anytime without money allowance."
        },
        {
          "id": 14,
          "insureId": 5,
          "name": "More special treatment with OPD for all types of illness."
        },
        {
          "id": 15,
          "insureId": 5,
          "name": "30 OPD visits per policy year and maximum 1 time per day."
        }
      ],
      "typeInsure": [
        {
          "id": 4,
          "typeId": 2,
          "name": "Kids Insurance",
          "insureId": 5
        },
        {
          "id": 9,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 5
        }
      ]
    },
    {
      "id": 6,
      "name": "DAILY HOSPITALISATION ALLOWANCE HEALTH INSURANCE",
      "price": 1464,
      "pic": "./assets/insurance_pic/6/pic.jpeg",
      "miniPic": "./assets/insurance_pic/6/mini_pic.jpeg",
      "minAge": 11,
      "maxAge": 60,
      "bullets": [
        {
          "id": 16,
          "insureId": 6,
          "name": "Don't be afraid about income when you go to hospital with daily compensation benefits."
        },
        {
          "id": 17,
          "insureId": 6,
          "name": "Premium starting at 122 baht per month. (for compensation plan 1,000 baht per day)"
        },
        {
          "id": 18,
          "insureId": 6,
          "name": "Absence from work, daily compensation of 1,000 baht per day."
        }
      ],
      "typeInsure": [
        {
          "id": 20,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 6
        }
      ]
    },
    {
      "id": 7,
      "name": "SPECIAL DAILY HOSPITALISATION ALLOWANCE HEALTH INSURANCE",
      "price": 2500,
      "pic": "./assets/insurance_pic/7/pic.jpeg",
      "miniPic": "./assets/insurance_pic/7/mini_pic.jpeg",
      "minAge": 1,
      "maxAge": 60,
      "bullets": [
        {
          "id": 19,
          "insureId": 7,
          "name": "Don't be afraid about income when you go to hospital with daily compensation."
        },
        {
          "id": 20,
          "insureId": 7,
          "name": "Receive daily compensation when staying in ICU room or major surgery, up to 40,000 baht."
        },
        {
          "id": 21,
          "insureId": 7,
          "name": "When hospitalized as an inpatient, the daily severance will be paid as a daily benefit."
        }
      ],
      "typeInsure": [
        {
          "id": 21,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 7
        }
      ]
    },
    {
      "id": 8,
      "name": "ICU HOSPITALISATION ALLOWANCE HEALTH INSURANCE",
      "price": 7960,
      "pic": "./assets/insurance_pic/8/pic.jpeg",
      "miniPic": "./assets/insurance_pic/8/mini_pic.jpeg",
      "minAge": 1,
      "maxAge": 70,
      "bullets": [
        {
          "id": 22,
          "insureId": 8,
          "name": "Income compensation when hospitalized for up to 1,500 days."
        },
        {
          "id": 23,
          "insureId": 8,
          "name": "Critical illness or stay in ICU room, receive up to 8,000 baht per day."
        },
        {
          "id": 24,
          "insureId": 8,
          "name": "Non-hospital treatment (Day Case) is also covered."
        }
      ],
      "typeInsure": [
        {
          "id": 15,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 8
        },
        {
          "id": 22,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 8
        }
      ]
    },
    {
      "id": 9,
      "name": "MY CI CARE HEALTH INSURANCE",
      "price": 23345,
      "pic": "./assets/insurance_pic/9/pic.jpeg",
      "miniPic": "./assets/insurance_pic/9/mini_pic.jpeg",
      "minAge": 16,
      "maxAge": 55,
      "bullets": [
        {
          "id": 25,
          "insureId": 9,
          "name": "Paying premiums is not wasted, sick or not, you get a lump sum."
        },
        {
          "id": 26,
          "insureId": 9,
          "name": "Covers both serious diseases Died in both illness and accident."
        },
        {
          "id": 27,
          "insureId": 9,
          "name": "Premiums are fixed throughout the contract withe tax deductible."
        }
      ],
      "typeInsure": []
    },
    {
      "id": 10,
      "name": "MY CI 48 BEYOND HEALTH INSURANCE",
      "price": 5336,
      "pic": "./assets/insurance_pic/10/pic.jpeg",
      "miniPic": "./assets/insurance_pic/10/mini_pic.jpeg",
      "minAge": 0,
      "maxAge": 70,
      "bullets": [
        {
          "id": 28,
          "insureId": 10,
          "name": "Serious diseases detected, there is an allowance for immediate treatment."
        },
        {
          "id": 29,
          "insureId": 10,
          "name": "Coverage from the age of 1 month 1 day until the age of 70 years."
        },
        {
          "id": 30,
          "insureId": 10,
          "name": "Affordable premiums cover up to 75 diseases/symptoms."
        }
      ],
      "typeInsure": []
    },
    {
      "id": 11,
      "name": "MY CI 48 HEALTH INSURANCE",
      "price": 4000,
      "pic": "./assets/insurance_pic/11/pic.jpeg",
      "miniPic": "./assets/insurance_pic/11/mini_pic.jpeg",
      "minAge": 16,
      "maxAge": 60,
      "bullets": [
        {
          "id": 31,
          "insureId": 11,
          "name": "Receive a lump sum when diagnosed with a specified critical illness"
        },
        {
          "id": 32,
          "insureId": 11,
          "name": "Covers up to 48 critical illnesses."
        },
        {
          "id": 33,
          "insureId": 11,
          "name": "Coverage up to the age of 70 years."
        }
      ],
      "typeInsure": []
    },
    {
      "id": 12,
      "name": "CANCER CBN HEALTH INSURANCE",
      "price": 18168,
      "pic": "./assets/insurance_pic/12/pic.jpeg",
      "miniPic": "./assets/insurance_pic/12/mini_pic.jpeg",
      "minAge": 16,
      "maxAge": 60,
      "bullets": [
        {
          "id": 34,
          "insureId": 12,
          "name": "Full treatment protection from diagnosis, treatment, follow-up for all stages of cancer."
        },
        {
          "id": 35,
          "insureId": 12,
          "name": "You can reimburse such as chemotherapy and radiation therapy without admit in hospital."
        },
        {
          "id": 36,
          "insureId": 12,
          "name": "Receive lump sum money in case of death both from illness and accident."
        }
      ],
      "typeInsure": [
        {
          "id": 1,
          "typeId": 1,
          "name": "Cancer Insurance",
          "insureId": 12
        }
      ]
    },
    {
      "id": 13,
      "name": "CANCER JIB JIB HEALTH INSURANCE",
      "price": 6000,
      "pic": "./assets/insurance_pic/13/pic.jpeg",
      "miniPic": "./assets/insurance_pic/13/mini_pic.jpeg",
      "minAge": 1,
      "maxAge": 50,
      "bullets": [
        {
          "id": 37,
          "insureId": 13,
          "name": "Covers all stages of cancer for invasive and non-invasive. Only answer health questions."
        },
        {
          "id": 38,
          "insureId": 13,
          "name": "Insurance premiums starting at 3 Baht per day."
        },
        {
          "id": 39,
          "insureId": 13,
          "name": "Cancer coverage at all stages, up to 1 million."
        }
      ],
      "typeInsure": [
        {
          "id": 2,
          "typeId": 1,
          "name": "Cancer Insurance",
          "insureId": 13
        }
      ]
    },
    {
      "id": 14,
      "name": "HS HEALTH INSURANCE",
      "price": 11000,
      "pic": "./assets/insurance_pic/14/pic.jpeg",
      "miniPic": "./assets/insurance_pic/14/mini_pic.jpeg",
      "minAge": 11,
      "maxAge": 70,
      "bullets": [
        {
          "id": 40,
          "insureId": 14,
          "name": "Provides coverage in case of being admitted as an inpatient in a hospital."
        },
        {
          "id": 41,
          "insureId": 14,
          "name": "Take care of medical expenses, including from the coronavirus. (COVID19)"
        },
        {
          "id": 42,
          "insureId": 14,
          "name": "Be confident in every journey… Take care of medical expenses all over the world."
        }
      ],
      "typeInsure": [
        {
          "id": 16,
          "typeId": 4,
          "name": "IPD Package",
          "insureId": 14
        },
        {
          "id": 23,
          "typeId": 5,
          "name": "ICU Coverage",
          "insureId": 14
        }
      ]
    },
    {
      "id": 15,
      "name": "OPD HS HEALTH INSURANCE",
      "price": 12000,
      "pic": "./assets/insurance_pic/15/pic.jpeg",
      "miniPic": "./assets/insurance_pic/15/mini_pic.jpeg",
      "minAge": 0,
      "maxAge": 60,
      "bullets": [
        {
          "id": 43,
          "insureId": 15,
          "name": "Special for outpatient hospitalization (OPD) up to 30 times per policy year."
        },
        {
          "id": 44,
          "insureId": 15,
          "name": "Convenient, fast, no need for money allowance."
        },
        {
          "id": 45,
          "insureId": 15,
          "name": "OPD coverage 4,000 Baht/time"
        }
      ],
      "typeInsure": [
        {
          "id": 10,
          "typeId": 3,
          "name": "OPD Package",
          "insureId": 15
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void { }

  filteredProduct: InsuranceProductHomePage[] = this.products;
  selectedProducts: InsuranceProductHomePage[] = [];
  currentItem = this.filteredProduct;

  isSelectInputRange: boolean = false;

  inputRange(inputRange: any) {
    this.minValue = inputRange.min;
    this.maxValue = inputRange.max;
    this.isSelectInputRange = true;
    console.log(this.minValue, ' ', this.maxValue);

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
    console.log(this.selectedProducts);
    console.log(eventData.selected);
  }

  searchFilter() {
    this.filteredProduct = this.products;
    this._listOfInsureSelected = this._listOfInsure
      .filter((x) => x.isSelected == true)
      .map((x) => x.name);
    this._listOfAgeSelected = this._listOfAge.filter(
      (x) => x.isSelected == true
    );
    console.log(this._listOfAgeSelected);

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
}
