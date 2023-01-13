import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://reqres.in/api/login'

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post( `${this.BASE_URL}/login`, body )
  }
}
