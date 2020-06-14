import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }
}
