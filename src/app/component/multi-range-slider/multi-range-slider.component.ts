import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-multi-range-slider',
  templateUrl: './multi-range-slider.component.html',
  styleUrls: ['./multi-range-slider.component.scss']
})
export class MultiRangeSliderComponent implements OnInit {

  @Input() options: Options = {
    floor: 0,
    ceil: 100,
    step: 0,
  };
  @Input() minValue: number = 0;
  @Input() maxValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
