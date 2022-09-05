import { Component, OnInit } from "@angular/core";
import { BookingService } from "../serivces/booking.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-request-result",
  templateUrl: "./request-result.component.html",
  styleUrls: ["./request-result.component.css"],
})
export class RequestResultComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private bookingService: BookingService,
    ) {}

  voitures: any[] = [];


  ngOnInit(): void {


    const body = {
      id_agence: this.bookingService.currentBooking.agence.idagence,
    };

    console.log(
      body
    );
    this.http
      .post<any>(
        "http://www.driveingreen.com:8200/agence",
        JSON.stringify(body),
        {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
        this.voitures = data.agence;
      });
  }


  }

  // voitures = [
  //   {
  //     marque: "BMW",
  //     modele: "i3",
  //     annee: 2022,
  //     kilometrage: 15000,
  //     places: 5,
  //     type: "Citadine",
  //     img: "./../../assets/images/BMW_i3.png",
  //     tarif: 100,
  //   },
  //   {
  //     marque: "Volkswagen",
  //     modele: "e-up",
  //     annee: 2022,
  //     kilometrage: 20000,
  //     places: 3,
  //     type: "Citadine",
  //     img: "./../../assets/images/e-up.png",
  //     tarif: 80,
  //   },
  //   {
  //     marque: "Peugeot",
  //     modele: "e-208",
  //     annee: 2020,
  //     kilometrage: 80000,
  //     places: 5,
  //     type: "Berline",
  //     img: "./../../assets/images/e208.png",
  //     tarif: 50,
  //   },
  //   {
  //     marque: "BMW",
  //     modele: "i3",
  //     annee: 2022,
  //     kilometrage: 15000,
  //     places: 5,
  //     type: "Citadine",
  //     img: "./../../assets/images/BMW_i3.png",
  //     tarif: 100,
  //   },
  //   {
  //     marque: "Volkswagen",
  //     modele: "e-up",
  //     annee: 2022,
  //     kilometrage: 20000,
  //     places: 3,
  //     type: "Citadine",
  //     img: "./../../assets/images/e-up.png",
  //     tarif: 80,
  //   },
  //   {
  //     marque: "Peugeot",
  //     modele: "e-208",
  //     annee: 2020,
  //     kilometrage: 80000,
  //     places: 5,
  //     type: "Berline",
  //     img: "./../../assets/images/e208.png",
  //     tarif: 50,
  //   },
  //   {
  //     marque: "BMW",
  //     modele: "i3",
  //     annee: 2022,
  //     kilometrage: 15000,
  //     places: 5,
  //     type: "Citadine",
  //     img: "./../../assets/images/BMW_i3.png",
  //     tarif: 100,
  //   },
  //   {
  //     marque: "Volkswagen",
  //     modele: "e-up",
  //     annee: 2022,
  //     kilometrage: 20000,
  //     places: 3,
  //     type: "Citadine",
  //     img: "./../../assets/images/e-up.png",
  //     tarif: 80,
  //   },
  //   {
  //     marque: "Peugeot",
  //     modele: "e-208",
  //     annee: 2020,
  //     kilometrage: 80000,
  //     places: 5,
  //     type: "Berline",
  //     img: "./../../assets/images/e208.png",
  //     tarif: 50,
  //   },
  // ];

