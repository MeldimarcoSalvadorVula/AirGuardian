import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilisticForecastComponent } from './probabilistic-forecast.component';

describe('ProbabilisticForecastComponent', () => {
  let component: ProbabilisticForecastComponent;
  let fixture: ComponentFixture<ProbabilisticForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbabilisticForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilisticForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
