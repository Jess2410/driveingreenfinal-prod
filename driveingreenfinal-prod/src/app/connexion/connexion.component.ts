import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private router: Router) { }

  email = '';
  mdp = '';

  ngOnInit(): void {
  }


  gotoInscription(){
    let inscription = this.router.navigate(['/InscriptionComponent']);
    console.log(inscription);
  }

  connection(email:string){
    const target = email;
    console.log(target);
  }


}
