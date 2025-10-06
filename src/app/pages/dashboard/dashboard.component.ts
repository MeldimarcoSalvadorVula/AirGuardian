import { Component } from '@angular/core';
import { InformationTodayComponent } from '../../components/information-today/information-today.component';
import { CardComponent } from '../../components/card/card.component';
import { HistoricalTrendsComponent } from '../../components/historical-trends/historical-trends.component';
import { HourlyTrendComponent } from '../../components/hourly-trend/hourly-trend.component';

@Component({
  selector: 'app-dashboard',
  imports: [InformationTodayComponent, CardComponent, HourlyTrendComponent, HistoricalTrendsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  location:string = "São Francisco, CA";
  items = [{},  {}, {}]


}
