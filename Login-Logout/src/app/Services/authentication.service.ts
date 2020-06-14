import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }


  login(authcredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authcredentials)
  }
  setToken(token: string) {
    localStorage.setItem('token', token)
  }
  removeToken() {
    localStorage.removeItem('token')
  }
  getPayload() {
    var token = localStorage.getItem('token')
    if (token) {
      var userpayload = atob(token.split('.')[1])
      return JSON.parse(userpayload)
    } else {
      return null
    }
  }

  isLoggedIn() {
    var userpayload = this.getPayload()
    if (userpayload) {
      return userpayload.exp > Date.now() / 1000
    } else {
      return false
    }
  }
}
