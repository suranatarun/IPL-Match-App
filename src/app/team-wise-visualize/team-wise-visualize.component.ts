import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import { IPLDataServeService } from '../ipl-data-serve.service';

@Component({
  selector: 'app-team-wise-visualize',
  templateUrl: './team-wise-visualize.component.html',
  styleUrls: ['./team-wise-visualize.component.scss']
})
export class TeamWiseVisualizeComponent implements OnInit {

  allteamwise: any = [];
  chart: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: IPLDataServeService) {
    this.allteamwise = data;
  }
  ngOnInit(): void {
    this.service.getTeamWiseData().subscribe(
      (datanew) => {

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: [this.allteamwise.team],
          datasets: [{
            label: 'Home Wins',
            backgroundColor: '#000000',
            data: [this.allteamwise.home_wins], 
            fill: false,
          }, {
            label: 'Away Wins',
            fill: false,
            backgroundColor: '#52057b',
            data: [(this.allteamwise.away_wins)], 
          },
          {
            label: 'Home Matches',
            fill: false,
            backgroundColor: '#892cdc',
            data: [this.allteamwise.home_matches], 
          },
          {
            label: 'Away Matches',
            fill: false,
            backgroundColor: '#bc6ff1',
            data: [this.allteamwise.away_matches], // <--- This line print Volume 24h Capital in YAxis
          },
          {
            label: 'Home_Win_Percent',
            fill: false,
            backgroundColor: '#16213e',
            data: [this.allteamwise.home_win_percentage], // <--- This line print Volume 24h Capital in YAxis
          },
          {
            label: 'Away_Win_Percent',
            fill: false,
            backgroundColor: '#e94560',
            data: [this.allteamwise.away_win_percentage], // <--- This line print Volume 24h Capital in YAxis
          }
        ]
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
