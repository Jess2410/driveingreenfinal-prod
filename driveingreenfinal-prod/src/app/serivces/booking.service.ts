import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { idAgence } from "../models/agence";
import { Agence } from "../models/agence.model";
import { Booking } from "../models/booking.model";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private _url: string = "http://midiride.com:8100/bornes";
  private _urlagence: string = "http://www.driveingreen.com:8200/agence";

  // varible à déclarer, si on veut faire propre, dans un fichier de constantes ..
  public readonly LCL_STRG_KEY_CURRENT_BOOKING: string =
    "LCL_STRG_KEY_CURRENT_BOOKING";

  private _currentBooking!: Booking;


  constructor(private http: HttpClient) {}


  getagence(): Observable<Agence[]> {
    return this.http.get<Agence[]>(this._urlagence);
  }

  public get currentBooking(): Booking {
    if (localStorage[this.LCL_STRG_KEY_CURRENT_BOOKING]) {
      this._currentBooking = JSON.parse(
        localStorage[this.LCL_STRG_KEY_CURRENT_BOOKING]
      );
    }

    return this._currentBooking;
  }

  setCurrentBooking(inputBooking: any, agencesList: Agence[]): void {
    const agenceSelected = this.getAgenceSelectedFromList(
      inputBooking["idagence"],
      agencesList
    );

    const booking = <Booking>{
      agence: agenceSelected,
      date_depart: inputBooking.date_depart,
      heure_depart: inputBooking.heure_depart,
      date_arrivee: inputBooking.date_arrivee,
      heure_arrivee: inputBooking.heure_arrivee,
      type: inputBooking.type,
      idVoiture: inputBooking.idVoiture,
    };

    localStorage[this.LCL_STRG_KEY_CURRENT_BOOKING] = JSON.stringify(booking);
    this._currentBooking = booking;

    // ATTENTION, le local storage est persistant en mémoire browser
    // DONC: vous devrez vous débarrasser des valeurs du bookingForm sauvegardé lorsque c'est nécessaire
    // AVEC: localStorage.clear(); pour tout flusher
    // OU bien, si c'est pour un élément spécifique, pour celui qui nous interesse en particulier:
    // localStorage.removeItem("LCL_STRG_KEY_CURRENT_BOOKING");
  }

  private getAgenceSelectedFromList(
    idAgenceSelected: number,
    agencesList: Agence[]
  ): Agence {
    let agenceOutput!: Agence;

    agencesList.forEach((agence) => {
      if (agence.idagence == idAgenceSelected) {
        agenceOutput = agence;
      }
    });

    return agenceOutput;
  }

  //id de l'agence qui retourne le tableau de voiture
}
