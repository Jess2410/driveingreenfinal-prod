import { Component, OnInit } from '@angular/core';
import { BookingService } from '../serivces/booking.service';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.component.html',
  styleUrls: ['./list-agence.component.css']
})
export class ListAgenceComponent implements OnInit {

  public result: any[] = [];

  constructor(private _serviceAgence: BookingService) { }

  ngOnInit(): void {

    this._serviceAgence.getagence()
    .subscribe(data => this.result = data)
    console.log(this.result)
  }

}
