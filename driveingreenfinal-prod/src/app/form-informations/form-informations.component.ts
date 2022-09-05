import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-informations',
  templateUrl: './form-informations.component.html',
  styleUrls: ['./form-informations.component.css' ]
})
export class FormInformationsComponent implements OnInit {

  booking = {
        date_depart: '',
        heure_depart: '',
        date_arrivee: '',
        heure_arrivee: ''
        }

  constructor() { }

  ngOnInit(): void {
  }

}
