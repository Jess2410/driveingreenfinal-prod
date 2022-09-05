import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-type',
  templateUrl: './cards-type.component.html',
  styleUrls: ['./cards-type.component.css'  ]
})
export class CardsTypeComponent implements OnInit {

  // voiture: object = {
  //   marque!: String,
  //   modele!: String,
  //   annee!: Number,
  //   kilometrage!: Number,
  //   places!: Number,
  //   type!: String,
  //   img!: String,
  //   tarif!: Number
  // }

  voitures = [
    {
      marque: "BMW",
      modele: "i3",
      annee: 2022,
      kilometrage: 15000,
      places: 5,
      type: "Citadine",
      img: "./../../assets/images/BMW_i3.png",
      tarif: 100
    },
    {
      marque: "Volkswagen",
      modele: "e-up",
      annee: 2022,
      kilometrage: 20000,
      places: 3,
      type: "Citadine",
      img: "./../../assets/images/e-up.png",
      tarif: 80
    },
    {
      marque: "Peugeot",
      modele: "e-208",
      annee: 2020,
      kilometrage: 80000,
      places: 5,
      type: "Citadine",
      img: "./../../assets/images/e208.png",
      tarif: 50
    },
  ]


  constructor() { }

  

  ngOnInit(): void {
  }

}
