import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressUrl: string = 'https://macmickey.azurewebsites.net/Address'

  constructor(private apiService: ApiService) { }

  getAdresses(): Observable<Address[]>{
    return this.apiService.get<Address[]>(this.addressUrl)
  }

  getAddressById(addressId: number): Observable<Address>{
    const url = `${this.addressUrl}/${addressId}`
    return this.apiService.get<Address>(url)
  }

  addAddress(newAddress: Address): Observable<Address>{
    return this.apiService.post<Address>(this.addressUrl, newAddress)
  }
}
