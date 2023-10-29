import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  endPoint: string = 'Address'

  constructor(private apiService: ApiService) { }

  getAdresses(): Observable<Address[]>{
    return this.apiService.get<Address[]>(this.endPoint)
  }

  getAddressById(addressId: number): Observable<Address>{
    const url = `${this.endPoint}/${addressId}`
    return this.apiService.get<Address>(url)
  }

  addAddress(newAddress: Address): Observable<Address>{
    return this.apiService.post<Address>(this.endPoint, newAddress)
  }
}
