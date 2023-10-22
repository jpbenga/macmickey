import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl = 'https://macmickey.azurewebsites.net/Client'

  constructor(private apiService: ApiService) { }

  getClient(): Observable<Client>{
    return this.apiService.get<Client>(this.clientUrl)
  }

}
