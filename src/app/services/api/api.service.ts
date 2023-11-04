import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://macmickey.azurewebsites.net/'


  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${this.url}${endPoint}`)
  }

  post<T>(url: string, data: T): Observable<T>{
    return this.http.post<T>(url, data)
  }
}
