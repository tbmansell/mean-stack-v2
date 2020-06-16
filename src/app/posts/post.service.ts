import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get('http://localhost:3000/api/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }
}
