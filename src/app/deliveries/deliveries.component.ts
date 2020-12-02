import { Component, OnInit } from '@angular/core';
import { IPLDataServeService } from '../ipl-data-serve.service';
@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  search: string;
  p = 1;
  alldeliveries: any;

  constructor(private service: IPLDataServeService) { }
  public FetchDeliveriesData(): any {
    this.service.getDeliverydata().subscribe(
      (data: any) => {
        this.alldeliveries = data;
      });
  }
  ngOnInit(): void {
    this.FetchDeliveriesData();
  }
}
