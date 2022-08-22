import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompareComponent } from './card-compare.component';

describe('CardCompareComponent', () => {
  let component: CardCompareComponent;
  let fixture: ComponentFixture<CardCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
