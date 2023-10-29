import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  endPoint = 'Country'


  constructor(private apiService: ApiService) { }

  getCountry(): Observable<Country[]> {
    return this.apiService.get<Country[]>(this.endPoint);
  }

  getCountryByCode(countryCode: number): Observable<Country> {
    const url = `${this.endPoint}/${countryCode}`;
    return this.apiService.get<Country>(url);
  }

  getCountryByName(countryName: string): Observable<Country> {
    const url = `${this.endPoint}/${countryName}`;
    return this.apiService.get<Country>(url);
  }
}
