import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;

@Component({
  selector: 'app-traffic-chart',
  templateUrl: './traffic-chart.component.html',
  styleUrls: ['./traffic-chart.component.scss'],
})
export class TrafficChartComponent implements OnInit {
  private chartData: Array<any>;

  drawChart(data) {
    Highcharts.chart('traffic-chart-container', {
      chart: {
        type: 'spline',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: 'Application traffic in Android and Ios',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        labels: {
          overflow: 'justify',
        },
      },
      yAxis: {
        title: {
          text: 'Traffic Rate (Kb/s)',
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [
          {
            from: 0,
            to: 7,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
              text: 'Light Traffic',
              style: {
                color: '606060',
              },
            },
          },
          {
            from: 7,
            to: 15,
            color: 'rgba(255, 220, 220, 0.1)',
            label: {
              text: 'High Traffic',
              style: {
                color: '#606060',
              },
            },
          },
        ],
      },
      tooltip: {
        valueSuffix: ' Kb/s',
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
          pointInterval: 3600000,
          pointStart: Date.UTC(2018, 1, 13, 0, 0, 0),
        },
      },
      series: [
        {
          name: 'Android',
          color: '#9fbd26',
          data: [
            3.7,
            3.3,
            3.9,
            5.1,
            3.5,
            3.8,
            4.0,
            5.0,
            6.1,
            3.7,
            3.3,
            6.4,
            6.9,
            6.0,
            6.8,
            4.4,
            4.0,
            3.8,
            5.0,
            4.9,
            9.2,
            9.6,
            9.5,
            6.3,
            9.5,
            10.8,
            14.0,
            11.5,
            10.0,
            10.2,
            10.3,
            9.4,
            8.9,
            10.6,
            10.5,
            11.1,
            10.4,
            10.7,
            11.3,
            10.2,
            9.6,
            10.2,
            11.1,
            10.8,
            13.0,
            12.5,
            12.5,
            11.3,
            10.1,
          ],
        },
        {
          name: 'IOS',
          color: '#333',
          data: [
            0.2,
            0.1,
            0.1,
            0.1,
            0.3,
            0.2,
            0.3,
            0.1,
            0.7,
            0.3,
            0.2,
            0.2,
            0.3,
            0.1,
            0.3,
            0.4,
            0.3,
            0.2,
            0.3,
            0.2,
            0.4,
            0.0,
            0.9,
            0.3,
            0.7,
            1.1,
            1.8,
            1.2,
            1.4,
            1.2,
            0.9,
            0.8,
            0.9,
            0.2,
            0.4,
            1.2,
            0.3,
            2.3,
            1.0,
            0.7,
            1.0,
            0.8,
            2.0,
            1.2,
            1.4,
            3.7,
            2.1,
            2.0,
            1.5,
          ],
        },
      ],
      navigation: {
        menuItemStyle: {
          fontSize: '10px',
        },
      },
    });
  }

  constructor() {}

  ngOnInit() {
    // this.chartData = times(10 , () => random(1, 100));
    this.drawChart(this.chartData);
  }
}
