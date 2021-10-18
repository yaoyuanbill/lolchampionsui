import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LolChampion } from './lol-champion';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders ( {
      'Content-Type': 'application/json'
    })
  }

  //HttpClient api get() method
  getChampions(): Observable<LolChampion> {
    return this.http.get<LolChampion>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method
  getChampion(id:any): Observable<LolChampion> {
    return this.http.get<LolChampion>(this.apiUrl + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method
  updateChampion(id:number, champ:LolChampion): Observable<LolChampion> {
    return this.http.put<LolChampion>(this.apiUrl + '', JSON.stringify(champ), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method
  deleteChampion(id:number){
    return this.http.delete<LolChampion>(this.apiUrl + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method
  createShipper(champ:LolChampion): Observable<LolChampion> {
    return this.http.post<LolChampion>(this.apiUrl + '',JSON.stringify(champ),this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
