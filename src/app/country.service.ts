import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = 'https://macmickey.azurewebsites.net/Country'


  constructor(private apiService: ApiService) { }

  getCountry(): Observable<Country[]> {
    return this.apiService.get<Country[]>(this.countryUrl);
  }

  getCountryByCode(countryCode: number): Observable<Country> {
    const url = `${this.countryUrl}/${countryCode}`;
    return this.apiService.get<Country>(url);
  }

  getCountryByName(countryName: string): Observable<Country> {
    const url = `${this.countryUrl}/${countryName}`;
    return this.apiService.get<Country>(url);
  }
}
