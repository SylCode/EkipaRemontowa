import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { Injectable } from '@angular/core';

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

  public requestContact(message: string, email: string) {
    this.httpClient
      .post(
        '/api/contact/request-contact',
        { email: email, message: message },
        httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
