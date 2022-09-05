import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-form-responsive',
  templateUrl: './form-responsive.component.html',
  styleUrls: ['./form-responsive.component.css']
})
export class FormResponsiveComponent implements OnInit {

  

  constructor(
    private http: HttpClient,) { }

  ngOnInit(){

            
            const body = {'id_agence': '1'}

            this.http.post<any>('http://www.driveingreen.com:8200/agence',JSON.stringify(body), {headers:{'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}}).subscribe((data) =>{
              console.log(data);
            });
  }
}

function postMsg() {
  throw new Error('Function not implemented.');
}
