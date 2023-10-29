import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://macmickey.azurewebsites.net/'

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${this.url}${endPoint}`).pipe(
      catchError(this.handleError)
    )
  }

  post<T>(url: string, data: T): Observable<T>{
    return this.http.post<T>(url, data).pipe(
      catchError(this.handleError)
    )
  }
}
