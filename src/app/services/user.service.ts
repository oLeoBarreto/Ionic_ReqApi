import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsersList(url: string) {
    return this.http.get(url);
  }

  getUserData(url: string) {
    return this.http.get(url);
  }

}
