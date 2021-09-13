import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  public requestContact(message: string, email: string): Observable<Object> {
    return this.httpClient.post(
      '/api/contact/request-contact',
      { email: email, message: message },
      httpOptions
    );
  }
}
