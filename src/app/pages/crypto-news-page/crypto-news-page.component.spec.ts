import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoNewsPageComponent } from './crypto-news-page.component';

describe('CryptoNewsPageComponent', () => {
  let component: CryptoNewsPageComponent;
  let fixture: ComponentFixture<CryptoNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
