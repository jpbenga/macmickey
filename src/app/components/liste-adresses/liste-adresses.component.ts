import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-liste-adresses',
  templateUrl: './liste-adresses.component.html',
  styleUrls: ['./liste-adresses.component.css']
})
export class ListeAdressesComponent implements OnInit {

  addresses$!: Observable<Address[]>

  constructor(private addressService: AddressService){}

  ngOnInit(): void {
    this.addresses$ = this.addressService.getAdresses()
  }
}
