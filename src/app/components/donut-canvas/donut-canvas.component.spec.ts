import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutCanvasComponent } from './donut-canvas.component';

describe('DonutCanvasComponent', () => {
  let component: DonutCanvasComponent;
  let fixture: ComponentFixture<DonutCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
