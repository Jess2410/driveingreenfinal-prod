import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, Subscription, tap } from "rxjs";
import { Booking } from "../models/booking.model";
import { BookingService } from "../serivces/booking.service";

@Component({
  selector: "app-form-booking",
  templateUrl: "./form-booking.component.html",
  styleUrls: ["./form-booking.component.css"],
})
export class FormBookingComponent implements OnInit, OnDestroy {
  bookingForm!: FormGroup;
  newBooking$!: Observable<Booking>;
  bookingCompleted!: Boolean;

  private sub_FormValueChanges: Subscription;

  public result: any[] = [];
  public voitures: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      type: [null, Validators.required],
      idagence: [null, Validators.required],
      date_depart: [null, Validators.required],
      heure_depart: [null, Validators.required],
      date_arrivee: [null],
      heure_arrivee: [null],
    });

    this.bookingService.getagence().subscribe((data) => {
      this.result = data;

      this.sub_FormValueChanges = this.bookingForm.valueChanges.subscribe(
        (currentBooking: any) => {
          // console.log(
          //   "currcurrentBooking.agence.idagence: ",
          //   currentBooking.idagence
          // );

          console.log("currcurrentBooking: ", currentBooking);

          this.bookingService.setCurrentBooking(currentBooking, this.result);
          // console.log(
          //   "l.48 this.bookingService.currentBooking: ",
          //   this.bookingService.currentBooking
          // );
        }
      );
    });
  }
  


  onSubmitForm() {

    if (typeof this.bookingService.currentBooking.agence.idagence== 'undefined'
        || typeof this.bookingService.currentBooking.agence.idagence== 'undefined') {
      console.log('Tous les champs sont obligatoires !')
    } else {
      this.router.navigate(["result"]);
      const body = {
        id_agence: this.bookingService.currentBooking.agence.idagence,
      };
  
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
          console.log(
            this.voitures
          );
        });
    }
  
    }


  ngOnDestroy() {
    this.sub_FormValueChanges.unsubscribe();
  }
}
