import { Component, OnInit } from '@angular/core';
import { IPLDataServeService } from '../ipl-data-serve.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  search: any;
  allplayers: any = [];

  constructor(private service: IPLDataServeService) { }
  public FetchPlayersData(): any {
    this.service.getPlayersData().subscribe(
      (data: any) => {
        this.allplayers = data;
      });
  }
  ngOnInit(): void {
    this.FetchPlayersData();
  }
}
