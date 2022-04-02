import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = 'https://reqres.in/api/users';

  constructor(private hhtp: HttpClient) { }

  getUsersList(url: string) {
    return this.hhtp.get(url)
  }

}
