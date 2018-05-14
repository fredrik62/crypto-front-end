import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseDetailPageComponent } from './increase-detail-page.component';

describe('IncreaseDetailPageComponent', () => {
  let component: IncreaseDetailPageComponent;
  let fixture: ComponentFixture<IncreaseDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
