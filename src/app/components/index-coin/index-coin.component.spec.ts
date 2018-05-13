import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCoinComponent } from './index-coin.component';

describe('IndexCoinComponent', () => {
  let component: IndexCoinComponent;
  let fixture: ComponentFixture<IndexCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
