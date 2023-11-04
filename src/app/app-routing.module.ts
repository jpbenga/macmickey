import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ClientComponent } from './components/client/client.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './components/details-produits/details-produits.component';
import { CommandeProduitsComponent } from './components/commande-produits/commande-produits.component';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';
import { CommandesClientComponent } from './components/commandes-client/commandes-client.component';
import { AdressesLivraisonComponent } from './components/adresses-livraison/adresses-livraison.component';
import { ListeAdressesComponent } from './components/liste-adresses/liste-adresses.component';
import { FormulaireAjoutComponent } from './components/formulaire-ajout/formulaire-ajout.component';


const routes: Routes = [
  { path: 'produit', component: ProductComponent,
    children: [
      { path: 'liste-produits', component: ListeProduitsComponent},
      { path: 'commande-produits', component: CommandeProduitsComponent}
    ]
  },
    //chemin distint afin d'afficher le détail d'un produit en fonction de son id
  { path: 'produit/liste-produits/details-produits/:id', component: DetailsProduitsComponent},

    //chemin distinct qui permet d'afficher la page de commande d'un produit
  { path: 'produit/liste-produits/commande-produits/:id', component: CommandeProduitsComponent},

  { path: 'client', component: ClientComponent},

  //chemin vers le formulaire d'ajout d'adresse
  { path: 'client/formulaire-ajout', component: FormulaireAjoutComponent},

  //chemin pour afficher les adresses du client
  { path: 'client/liste-adresses', component: ListeAdressesComponent},
  //chemin pour afficher les commandes du client
  { path: 'client/commandes-client', component: CommandesClientComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
