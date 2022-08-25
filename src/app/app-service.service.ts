import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public statusCheck: {
    statusColumns1: number | undefined,
    statusColumns2: number | undefined
  }= {
    statusColumns1: undefined,
    statusColumns2: undefined
  };

  public checkboxStatus: {

    statusCheckbox1: boolean,
    statusCheckbox2: boolean,
    statusCheckbox3: boolean,

  }= {
    statusCheckbox1: false,
    statusCheckbox2: false,
    statusCheckbox3: false,
  }


  constructor() { }
}
