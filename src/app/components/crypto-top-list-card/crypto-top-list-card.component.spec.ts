import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTopListCardComponent } from './crypto-top-list-card.component';

describe('CryptoTopListCardComponent', () => {
  let component: CryptoTopListCardComponent;
  let fixture: ComponentFixture<CryptoTopListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoTopListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTopListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
