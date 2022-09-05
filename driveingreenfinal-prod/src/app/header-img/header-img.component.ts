import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-img',
  templateUrl: './header-img.component.html',
  styleUrls: ['./header-img.component.css' ]
})
export class HeaderImgComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoConnexion(){
    let link=this.router.navigate(['/connexion']);
    console.log(link);

  }

}




