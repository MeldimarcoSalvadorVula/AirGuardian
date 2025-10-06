import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComparisonComponent } from './forecast-comparison.component';

describe('ForecastComparisonComponent', () => {
  let component: ForecastComparisonComponent;
  let fixture: ComponentFixture<ForecastComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
