import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ClientComponent } from './components/client/client.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './components/details-produits/details-produits.component';
import { CommandeProduitsComponent } from './components/commande-produits/commande-produits.component';
import { CommandesClientComponent } from './components/commandes-client/commandes-client.component';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';
import { AdressesLivraisonComponent } from './components/adresses-livraison/adresses-livraison.component';
import { ListeAdressesComponent } from './components/liste-adresses/liste-adresses.component';
import { FormulaireAjoutComponent } from './components/formulaire-ajout/formulaire-ajout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './layout/navigation/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientComponent,
    ListeProduitsComponent,
    DetailsProduitsComponent,
    CommandeProduitsComponent,
    CommandesClientComponent,
    ListeCommandesComponent,
    AdressesLivraisonComponent,
    ListeAdressesComponent,
    FormulaireAjoutComponent,
    CounterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
