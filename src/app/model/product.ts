export interface InsuranceProduct{
    insuranceMiniDetailsID: number ;
    insuranceMiniDetailsName: string;
    insuranceMiniDetailsPic: string;
    insuranceMiniDetailsPrice:number;
    insuranceMiniDetailsFBulletin: string;
    insuranceMiniDetailsSBulletin: string;
    insuranceMiniDetailsTBulletin: string;
    insuranceMiniDetailsStartAge:number;
    insuranceMiniDetailsEndAge:number;
    insuranceMiniDetailsDisease:string;
    
}

export interface InsuranceProductDetail{
    insurancePic: string;
    insuranceName: string;
    insurancePrice: number;
    insuranceID: string;
    insuranceDetails: string;
}

export interface InsuranceProductHomePage{
    id: number;
    name: string;
    price: number;
    pic: string;
    miniPic: string;
    minAge: number;
    maxAge: number;
    bullets: any[];
    typeInsure:any[];
    
}

export interface InsuranceProductComparePage{
    id: number;
    INSURANCEPRODUCT: string;
    AgeCoverage: string;
    DailyCompensation: string;
    IPDRoomCoverage: string;
    OPDCoverage: string;
    MaximumCoveragePolicy: string;
    TaxBenefit: string;
    Price: string;
    
}

