import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { CommandeProduitsComponent } from './commande-produits/commande-produits.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { CommandesClientComponent } from './commandes-client/commandes-client.component';
import { AdressesLivraisonComponent } from './adresses-livraison/adresses-livraison.component';
import { ListeAdressesComponent } from './liste-adresses/liste-adresses.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';

const routes: Routes = [
  {
    path: 'produit',
     component: ProductComponent,
    children: [
      {
        path: 'liste-produits',
         component: ListeProduitsComponent,
        children: [
          { path: 'details-produits', component: DetailsProduitsComponent}
        ]
        },
        { path: 'commande-produits', component: CommandeProduitsComponent}
    ]
    },
  {
    path: 'client',
     component: ClientComponent,
    children: [
      {
        path: 'commandes-client',
        component: CommandesClientComponent,
        children: [
          { path: 'liste-commandes',
        component: ListeCommandesComponent}
        ]
      },
      { path: 'adresses-livraison',
        component: AdressesLivraisonComponent,
        children: [
          { path: 'liste-adresses', component: ListeAdressesComponent},
          { path: 'formulaire-ajout', component: FormulaireAjoutComponent}
        ]
    }
    ]

    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
