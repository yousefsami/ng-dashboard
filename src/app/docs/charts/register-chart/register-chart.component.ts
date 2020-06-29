import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;

@Component({
  selector: 'app-register-chart',
  templateUrl: './register-chart.component.html',
  styleUrls: ['./register-chart.component.scss'],
})
export class RegisterChartComponent implements OnInit {
  private chartData: Array<any>;

  drawChart(data) {
    Highcharts.chart('register-chart-container', {
      chart: {
        animation: false,
        backgroundColor: 'transparent',
        type: 'column',
        spacingBottom: 0,
        spacingTop: 10,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: {
        text: 'Monthly Average Register',
      },
      subtitle: {
        text: 'Source: Account Service',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Users',
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Register',
          data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
        },
      ],
    });
  }

  constructor() {}

  ngOnInit() {
    // this.chartData = times(10 , () => random(1, 100));
    this.drawChart(this.chartData);
  }
}
