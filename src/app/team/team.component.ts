import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPLDataServeService } from '../ipl-data-serve.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamsdata: any = [];
  constructor(public router: Router, private service: IPLDataServeService) { }

  public FetchTeamData(): any {
    this.service.getteamdata().subscribe((data: any) => {
      this.teamsdata = data;
    });
  }
  ngOnInit(): void {
    this.FetchTeamData();
  }
}
