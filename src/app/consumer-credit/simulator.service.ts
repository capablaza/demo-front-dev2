import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from './credit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'    
  })
};

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {
  
  private API_URL = 'http://3.91.219.142:5100/simulator';  // URL for backend
  //private API_URL = 'http://localhost:8080/simulator';  // URL for backend


  constructor(private httpClient: HttpClient) { }

  evaluateCredit(credit: Credit): Observable<Credit> {    
    return this.httpClient.post<Credit>(this.API_URL, credit, httpOptions);    
  }
}
