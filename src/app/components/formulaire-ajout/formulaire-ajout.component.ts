import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent {

  addressForm = this.fb.group({
    addressID: ['', Validators.required],
    streetLine1: ['', Validators.required],
    streetLine2: ['', Validators.required],
    zipCode: ['', Validators.required],
    city: ['', Validators.required],
    phone: ['', Validators.required],
    countryID: [0, Validators.required],
    clientID: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private addressService: AddressService) { }

  onSubmit() {
  if (this.addressForm.valid) {
    // Créez un objet de type Address en utilisant les données du formulaire.
    const formData = this.addressForm.value;
    const newAddress: Address = {
      // Assurez-vous de convertir les valeurs possiblement nulles ou undefined en valeurs par défaut, par exemple, une chaîne vide.
      addressID: formData.addressID || '',
      streetLine1: formData.streetLine1 || '',
      streetLine2: formData.streetLine2 || '',
      zipCode: formData.zipCode || '',
      city: formData.city || '',
      phone: formData.phone || '',
      countryID: formData.countryID || 0,
      clientID: formData.clientID || ''
    }

    // Appeler le service pour ajouter l'adresse
    this.addressService.addAddress(newAddress)
  }
}

}
