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

  public checkcolumns: number | null = 0;

  constructor() { }
}
