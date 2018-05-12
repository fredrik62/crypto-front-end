import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTopIncreasePageComponent } from './crypto-top-increase-page.component';

describe('CryptoTopIncreasePageComponent', () => {
  let component: CryptoTopIncreasePageComponent;
  let fixture: ComponentFixture<CryptoTopIncreasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoTopIncreasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTopIncreasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
