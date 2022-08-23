import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
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
  @Input() minValue: number = 1000;
  @Input() maxValue: number = 200000;

  @Output() rangeInput = new EventEmitter<{min:number , max:number}>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputRange(minV: number ,maxV: number ) {
    this.rangeInput.emit({min:minV , max:maxV});
  }

}
