import { Component, OnInit } from '@angular/core';
import { IPLDataServeService } from '../ipl-data-serve.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  p = 1;
  search: string;
  allmatchesdata: any = [];

  constructor(public service: IPLDataServeService) { }
  public FetchMatchesData(): any {
    this.service.getMatchData().subscribe(
      (data: any) => {
      this.allmatchesdata = data;
    });
  }
  ngOnInit(): void {
    this.FetchMatchesData();
  }
}
