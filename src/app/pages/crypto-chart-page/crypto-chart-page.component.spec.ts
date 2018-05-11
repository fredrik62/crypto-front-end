import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoChartPageComponent } from './crypto-chart-page.component';

describe('CryptoChartPageComponent', () => {
  let component: CryptoChartPageComponent;
  let fixture: ComponentFixture<CryptoChartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoChartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
