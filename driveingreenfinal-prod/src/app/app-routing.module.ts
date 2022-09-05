import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingpageComponent } from "./bookingpage/bookingpage.component";
import { BuildingpageComponent } from "./buildingpage/buildingpage.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { ContactpageComponent } from "./contactpage/contactpage.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { InfospageComponent } from "./infospage/infospage.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { RequestResultComponent } from "./request-result/request-result.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "building", component: BuildingpageComponent },
  { path: "booking", component: BookingpageComponent },
  { path: "result", component: RequestResultComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "my-account", component: MyAccountComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "informations", component: InfospageComponent },
  { path: "contact", component: ContactpageComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
