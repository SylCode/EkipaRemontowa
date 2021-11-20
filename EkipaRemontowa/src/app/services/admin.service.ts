import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Md5 } from 'md5-typescript';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  public login(login: string, pass: string): Observable<any> {
    pass = Md5.init(pass);
    return this.httpClient.post<Observable<any>>('/api/auth', {
      login,
      pass,
    }) as Observable<any>;
  }
}
