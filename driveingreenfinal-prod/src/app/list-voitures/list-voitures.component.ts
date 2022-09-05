import { Component, OnInit } from '@angular/core';
import { BookingService } from '../serivces/booking.service';

@Component({
  selector: 'app-list-voitures',
  templateUrl: './list-voitures.component.html',
  styleUrls: ['./list-voitures.component.css']
})
export class ListVoituresComponent implements OnInit {

  public result: any[] = [];

  constructor(private BookingService: BookingService) { }

  ngOnInit(): void {

  }

}
