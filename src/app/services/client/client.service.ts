import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  endPoint = 'Client'

  constructor(private apiService: ApiService) { }

  getClient(): Observable<Client>{
    return this.apiService.get<Client>(this.endPoint)
  }

}
