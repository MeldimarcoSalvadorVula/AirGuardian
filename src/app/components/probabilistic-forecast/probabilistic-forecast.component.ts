import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-probabilistic-forecast',
  imports: [CommonModule],
  templateUrl: './probabilistic-forecast.component.html',
  styleUrl: './probabilistic-forecast.component.css'
})
export class ProbabilisticForecastComponent {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | null = null;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Now', '+3h', '+6h', '+9h', '+12h', '+15h', '+18h', '+21h'],
        datasets: [
          {
            label: 'Best Case',
            data: [45, 49, 54, 47, 40, 37, 39, 44],
            borderColor: '#10B981',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#10B981',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4
          },
          {
            label: 'Expected',
            data: [55, 61, 66, 57, 50, 48, 49, 53],
            borderColor: '#F59E0B',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#F59E0B',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4
          },
          {
            label: 'Worst Case',
            data: [66, 71, 77, 69, 62, 57, 61, 66],
            borderColor: '#EF4444',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#EF4444',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#9CA3AF',
              usePointStyle: true,
              padding: 20,
              font: { size: 13 }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#6B7280', font: { size: 11 } }
          },
          y: {
            min: 0,
            max: 80,
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#6B7280', stepSize: 20, font: { size: 11 } }
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


// =====================================================
// ARQUIVO: src/styles.css (ESTILOS GLOBAIS)
// =====================================================
/*
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background: #0a0a0a;
  color: #fff;
}
*/

