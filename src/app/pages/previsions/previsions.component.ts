import { Component } from '@angular/core';
import { ProbabilisticForecastComponent } from '../../components/probabilistic-forecast/probabilistic-forecast.component';
import { ForecastComparisonComponent } from '../../components/forecast-comparison/forecast-comparison.component';

@Component({
  selector: 'app-previsions',
  imports: [ProbabilisticForecastComponent, ForecastComparisonComponent],
  templateUrl: './previsions.component.html',
  styleUrl: './previsions.component.css'
})
export class PrevisionsComponent {

}
