import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IPLDataServeService } from '../ipl-data-serve.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-strikerate-visualize',
  templateUrl: './strikerate-visualize.component.html',
  styleUrls: ['./strikerate-visualize.component.scss']
})
export class StrikerateVisualizeComponent implements OnInit {

  chart: any = [];
  alldata: any = [];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private service: IPLDataServeService) {
    console.log(data);
    this.alldata = data;
   }
  ngOnInit(): void {
    this.service.getMostRunsData().subscribe((datanew: any) => {
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: [this.alldata.batsman],
          datasets: [{
            label: 'Home Wins',
            backgroundColor: '#000000',
            data: [this.alldata.total_runs], // <---  This line print Coins Price in Yaxis
            fill: false,
          }, {
            label: 'Away Wins',
            fill: false,
            backgroundColor: '#52057b',
            data: [(this.alldata.out)], // <--- This line print Market Capital in YAxis
          },
          {
            label: 'Home Matches',
            fill: false,
            backgroundColor: '#892cdc',
            data: [this.alldata.numberofballs], // <--- This line print Volume 24h Capital in YAxis
          },
          {
            label: 'Away Matches',
            fill: false,
            backgroundColor: '#bc6ff1',
            data: [this.alldata.average], // <--- This line print Volume 24h Capital in YAxis
          },
          {
            label: 'Home_Win_Percent',
            fill: false,
            backgroundColor: '#16213e',
            data: [this.alldata.strikerate], // <--- This line print Volume 24h Capital in YAxis
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
        }
      });

    });
  }
}
