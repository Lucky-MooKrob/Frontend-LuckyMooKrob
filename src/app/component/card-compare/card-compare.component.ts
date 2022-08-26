import { Component, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { InsuranceProductComparePage } from 'src/app/model/product';

@Component({
  selector: 'app-card-compare',
  templateUrl: './card-compare.component.html',
  styleUrls: ['./card-compare.component.scss']
})
export class CardCompareComponent implements OnInit {


  @Input() product1: InsuranceProductComparePage = {
    id: 0,
    INSURANCEPRODUCT: "",
    AgeCoverage: "",
    DailyCompensation: "",
    IPDRoomCoverage: "",
    OPDCoverage: "",
    MaximumCoveragePolicy: "",
    TaxBenefit: "",
    Price: ""
  };

  @Input() column: number = 0

  constructor(
    private service: AppServiceService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  onClick(id: number, columnNo: number) {

    this.reloadCurrentRoute()

    console.log(columnNo);
    console.log(id);
    if (columnNo === 1) {
      this.service.statusCheck.statusColumns1 = undefined
      // this.test.next(undefined)
    }
    if (columnNo === 2) {
      this.service.statusCheck.statusColumns2 = undefined
    }
    console.log("🚀 ~ file: card-compare.component.ts ~ line 41 ~ CardCompareComponent ~ onClick ~ this.service.statusCheck.statusColumns1", this.service.statusCheck.statusColumns1)
    console.log("🚀 ~ file: card-compare.component.ts ~ line 44 ~ CardCompareComponent ~ onClick ~ this.service.statusCheck.statusColumns2", this.service.statusCheck.statusColumns2)
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
