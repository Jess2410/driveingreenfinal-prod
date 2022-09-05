import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {


  user = {
    Nom : 'alex',
    Prenom : 'Serian',
    Email : 'AlexS@gmail.com',
    Password :'**********',
    Date :'15/07/1987',
    Adresse : "51 Chemin de l'om 13000 Marseille",
    Phone : "0711223344",
    
  }
  
  constructor() { }

  ngOnInit(): void {



}
}
