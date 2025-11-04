
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl+'/user'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  registerUser(userData: any): Observable<any> {
    const body = { name: userData.email, email: userData.email, password: userData.password };
    return this.http.post(this.apiUrl + '/register', body, { withCredentials: true });
  }

  login(userData: any): Observable<any> {
    const body = { email: userData.email, password: userData.password };
    return this.http.post(this.apiUrl + '/login', body, { withCredentials: true });
  }

  getUser(userData: any): Observable<any> {
    return this.http.get(this.apiUrl + '/getuser/' + userData, { withCredentials: true });
  }
}