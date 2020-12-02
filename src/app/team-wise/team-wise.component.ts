import { Component, OnInit } from '@angular/core';
import { IPLDataServeService } from '../ipl-data-serve.service';
import { MatDialog } from '@angular/material/dialog';
import { TeamWiseVisualizeComponent } from '../team-wise-visualize/team-wise-visualize.component';
@Component({
  selector: 'app-team-wise',
  templateUrl: './team-wise.component.html',
  styleUrls: ['./team-wise.component.scss']
})
export class TeamWiseComponent implements OnInit {

  allteamwise: any = [];
  constructor(private service: IPLDataServeService, private dialog: MatDialog) { }

  public FetchTeamWiseData(): any {
    this.service.getTeamWiseData().subscribe((data: any) => {
      this.allteamwise = data;
    });
  }
  public openDialog(cardData: any): any {
    this.dialog.open(TeamWiseVisualizeComponent, {
      data: cardData,
      width: '800px',
      height: '450px'
    });
  }
  ngOnInit(): void {
    this.FetchTeamWiseData();
  }
}
