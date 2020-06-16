import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log(`login: username=${username} password=${password}`);

    return this.http.post(
      'http://localhost:3000/api/sessions',
      {
        username,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text',
      }
    );
  }

  create(username: string, password: string): User {
    return null;
  }

  getUser(authHeader: string): Observable<Object> {
    return this.http.get(
      'http://localhost:3000/api/users',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': authHeader,
        },
        responseType: 'json',
      });
  }


}
