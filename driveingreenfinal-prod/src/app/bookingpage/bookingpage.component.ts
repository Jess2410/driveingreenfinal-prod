import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BookingService } from "../serivces/booking.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Booking } from "../models/booking.model";
import { Voiture } from "../models/voiture.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-bookingpage",
  templateUrl: "./bookingpage.component.html",
  styleUrls: ["./bookingpage.component.css"],
})
export class BookingpageComponent implements OnInit, OnDestroy {
  bookingForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private bookingService: BookingService
  ) {}

  finalised: Boolean = false;
  public result: any[] = [];
  private sub_FormValueChanges: Subscription;
  voitures: any[] = [];

  ngOnInit(): void {
    console.log(
      this.bookingService.currentBooking,
      this.bookingService.currentBooking.agence
    );

    if (this.bookingService.currentBooking) {
      console.log("if (this.bookingService.currentBooking) ");
      this.bookingForm = this.formBuilder.group({
        type: [this.bookingService.currentBooking.type, Validators.required],
        agence: [
          this.bookingService.currentBooking.agence,
          Validators.required,
        ],
        date_depart: [
          this.bookingService.currentBooking.date_depart,
          Validators.required,
        ],
        heure_depart: [
          this.bookingService.currentBooking.heure_depart,
          Validators.required,
        ],
        date_arrivee: [this.bookingService.currentBooking.date_arrivee],
        heure_arrivee: [this.bookingService.currentBooking.heure_arrivee],
      });
    } else {
      this.bookingForm = this.formBuilder.group({
        type: [null, Validators.required],
        agence: [null, Validators.required],
        date_depart: [null, Validators.required],
        heure_depart: [null, Validators.required],
        date_arrivee: [null],
        heure_arrivee: [null],
      });
    }

    this.bookingService.getagence().subscribe((data) => {
      this.result = data;
      console.log("Id agence", this.result);

      this.sub_FormValueChanges = this.bookingForm.valueChanges.subscribe(
        (currentBooking: Booking) => {
          this.bookingService.setCurrentBooking(currentBooking, this.result);
          console.log("là:", currentBooking);
        }
      );
    });

    const body1 = { id_agence: "1" };

    this.http
      .post<any>(
        "http://www.driveingreen.com:8200/agence",
        JSON.stringify(body1),
        {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.bookingService.getagence().subscribe((data) => (this.result = data));
    console.log(this.result);
  }


  date_depart!: String;
  heure_depart!: String;
  date_arrivee!: String;
  heure_arrivee!: String;
  agence: String;
  voiture!: String;
  type: String;
  infos_voiture: Element | null;
  prix_voiture!: string;
  nom!: string;
  prenom!: string;
  tel!: string;

  onSubmitForm() {
    console.log(this.bookingForm.value);
  }

  id: any = "1";

  tabNumberchange(ids: any) {
    if (this.id > ids) {
      this.id = ids
    };
  }

  tabChange(ids: any) {
      this.id = ids
  }

  nextTab(ids: any) {
    if (ids == 1) {

      //récupérer données du form ligh

      this.agence = this.bookingService.currentBooking.agence.Nom;
      this.date_depart = this.bookingService.currentBooking.date_depart;
      this.heure_arrivee = this.bookingService.currentBooking.heure_arrivee;
      this.date_arrivee = this.bookingService.currentBooking.date_arrivee;
      this.heure_depart = this.bookingService.currentBooking.heure_depart;

      console.log(typeof(this.bookingService.currentBooking.heure_depart))

      //recuperer le numéro d'agence et faire la requete
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
          console.log("Line 129", data);
          this.voitures = data.agence;
          // console.log(this.voitures = data.agence.this.idvoiture);
          console.log((this.voiture = data.agence));    
        });

      this.tabChange("2");
    } else if (ids == 2) {
      this.tabChange("3");
    } else if (ids == 3) {
      this.finalised = true;
      console.log("Ça marche");
      console.log(this.finalised);
    }
    document.getElementById("remonte")?.scrollIntoView();
  }

  previousTab(ids: any) {
    if (ids == 2) {
      this.tabChange("1");
    } else if (ids == 3) {
      this.tabChange("2");
    } else {
      this.router.navigate([""]);
    }
  }

  recap = [];

  changetype(event: any) {
    this.type = event.target.value;
    document.getElementById("details_voiture")?.scrollIntoView();
  }


  select_voiture(event: any) {
      this.infos_voiture = (event.target.closest("div").firstChild.firstChild.innerHTML + 
      event.target.closest("div").firstChild.children[1].innerHTML);
      this.prix_voiture = (event.target.closest("div").children[2].children[1].innerHTML);
      setTimeout(() => {
      document.getElementById("continuer")?.scrollIntoView({ behavior: 'smooth' });}, 1000)
      document.querySelector('clicked')?.classList.remove("clicked");
      event.target.className = 'clicked';
      event.target.innerHTML = 'Ajoutée';
  }

  change_nom(event: any) {
    this.nom = event.target.value;
    console.log(this.nom);
  }

  change_prenom(event: any) {
    this.prenom = event.target.value;
    console.log(this.prenom);
  }

  change_tel(event: any) {
    this.tel = event.target.value;
    console.log(this.tel);
  }



  ngOnDestroy() {
    this.sub_FormValueChanges.unsubscribe();
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
