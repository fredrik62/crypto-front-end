import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTopListPageComponent } from './crypto-top-list-page.component';

describe('CryptoTopListPageComponent', () => {
  let component: CryptoTopListPageComponent;
  let fixture: ComponentFixture<CryptoTopListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoTopListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTopListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
