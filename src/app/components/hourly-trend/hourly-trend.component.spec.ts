import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyTrendComponent } from './hourly-trend.component';

describe('HourlyTrendComponent', () => {
  let component: HourlyTrendComponent;
  let fixture: ComponentFixture<HourlyTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyTrendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
