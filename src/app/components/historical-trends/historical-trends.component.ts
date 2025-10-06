import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-historical-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historical-trends.component.html',
  styleUrls: ['./historical-trends.component.css']
})
export class HistoricalTrendsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | null = null;

  selectedPeriod = '7';
  stats = {
    average: 69,
    peak: 75,
    lowest: 62,
    trend: 10
  };

  constructor() {
    // 🔹 REGISTRA OS COMPONENTES DO CHART.JS
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  selectPeriod(period: string): void {
    this.selectedPeriod = period;
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Sep 28', 'Sep 29', 'Sep 30', 'Oct 1', 'Oct 2', 'Oct 3', 'Oct 4'],
        datasets: [{
          data: [72, 68, 71, 69, 70, 67, 69],
          borderColor: 'rgba(59, 130, 246, 0.8)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          pointRadius: 3,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { color: '#6B7280', font: { size: 11 } }
          },
          y: {
            min: 0,
            max: 200,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { color: '#6B7280', stepSize: 50, font: { size: 11 } }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
