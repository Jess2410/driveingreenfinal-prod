import { Agence } from "./agence.model";

export interface Booking {
  type: string;
  agence: Agence; // ATTENTION: dans bookingpage.component, vous utilisez les "agences" avec un type "objet" multi-propriétés, ici c'est un string simple. Il faut faire un choix!
  date_depart: string;
  heure_depart: string;
  date_arrivee: string;
  heure_arrivee: string;
  idVoiture: number;
}
