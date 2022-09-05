import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { FormBookingComponent } from "./form-booking/form-booking.component";
import { HeaderLightComponent } from "./header-light/header-light.component";
import { SectionPresentationComponent } from "./section-presentation/section-presentation.component";
import { HeaderImgComponent } from "./header-img/header-img.component";
import { SectionServicesComponent } from "./section-services/section-services.component";
import { SectionMapComponent } from "./section-map/section-map.component";
import { SectionAdvantagesComponent } from "./section-advantages/section-advantages.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { BookingpageComponent } from "./bookingpage/bookingpage.component";
import { BuildingpageComponent } from "./buildingpage/buildingpage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { LayoutModule } from "@angular/cdk/layout";
import { FormResponsiveComponent } from "./form-responsive/form-responsive.component";
import { CardsComponent } from "./cards/cards.component";
import { CardsTypeComponent } from "./cards-type/cards-type.component";
import { FormInformationsComponent } from "./form-informations/form-informations.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HttpClientModule } from "@angular/common/http";
import { MyAccountComponent } from "./my-account/my-account.component";
import { FormContactComponent } from "./form-contact/form-contact.component";
import { ContactpageComponent } from "./contactpage/contactpage.component";
import { InfospageComponent } from "./infospage/infospage.component";
import { SubsectionBannerComponent } from "./subsection-banner/subsection-banner.component";
import { SubsectionElectricComponent } from "./subsection-electric/subsection-electric.component";
import { SubsectionCardsComponent } from "./subsection-cards/subsection-cards.component";
import { ListAgenceComponent } from "./list-agence/list-agence.component";
import { BookingService } from "./serivces/booking.service";
import { ListVoituresComponent } from "./list-voitures/list-voitures.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { RequestResultComponent } from "./request-result/request-result.component";
import { FormBookingLightComponent } from "./form-booking-light/form-booking-light.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormBookingComponent,
    HeaderLightComponent,
    SectionPresentationComponent,
    HeaderImgComponent,
    SectionServicesComponent,
    SectionMapComponent,
    SectionAdvantagesComponent,
    NavbarComponent,
    HomepageComponent,
    BookingpageComponent,
    BuildingpageComponent,
    FormResponsiveComponent,
    CardsComponent,
    CardsTypeComponent,
    FormInformationsComponent,
    ConnexionComponent,
    InscriptionComponent,
    NotfoundComponent,
    MyAccountComponent,
    FormContactComponent,
    ContactpageComponent,
    InfospageComponent,
    SubsectionBannerComponent,
    SubsectionElectricComponent,
    SubsectionCardsComponent,
    ListAgenceComponent,
    ListVoituresComponent,
    RequestResultComponent,
    FormBookingLightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
  ],
  providers: [BookingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
