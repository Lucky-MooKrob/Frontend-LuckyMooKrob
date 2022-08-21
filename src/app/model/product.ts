export interface InsuranceProduct{
    insuranceMiniDetailsID: string ;
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

