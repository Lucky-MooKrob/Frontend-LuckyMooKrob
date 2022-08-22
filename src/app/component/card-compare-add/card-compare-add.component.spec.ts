import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompareAddComponent } from './card-compare-add.component';

describe('CardCompareAddComponent', () => {
  let component: CardCompareAddComponent;
  let fixture: ComponentFixture<CardCompareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompareAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
