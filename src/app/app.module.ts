import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { CommandeProduitsComponent } from './commande-produits/commande-produits.component';
import { CommandesClientComponent } from './commandes-client/commandes-client.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { AdressesLivraisonComponent } from './adresses-livraison/adresses-livraison.component';
import { ListeAdressesComponent } from './liste-adresses/liste-adresses.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

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
    FormulaireAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
