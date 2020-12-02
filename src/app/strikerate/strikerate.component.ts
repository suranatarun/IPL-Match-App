import { Component, OnInit } from '@angular/core';
import { IPLDataServeService } from '../ipl-data-serve.service';
import {MatDialog} from '@angular/material/dialog';
import { StrikerateVisualizeComponent } from '../strikerate-visualize/strikerate-visualize.component';
@Component({
  selector: 'app-strikerate',
  templateUrl: './strikerate.component.html',
  styleUrls: ['./strikerate.component.scss']
})
export class StrikerateComponent implements OnInit {

  search: string;
  allmostruns: any = [];
  constructor(private service: IPLDataServeService, private dialog: MatDialog) { }

  public FetchMostRunsData(): any {
    this.service.getMostRunsData().subscribe(
      (data: any) => {
      this.allmostruns = data;
    });
  }
  public openDialog(alldata: any): any {
    this.dialog.open(StrikerateVisualizeComponent, {
      data: alldata,
      width: '900px',
      height: '500px'
    });
  }
  ngOnInit(): void {
    this.FetchMostRunsData();
  }

}
