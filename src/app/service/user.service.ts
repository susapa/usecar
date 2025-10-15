
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user'; // Your Express API URL

  constructor(private http: HttpClient) { }

  // Method for a GET request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Method for a POST request (e.g., login/register)
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