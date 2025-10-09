
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define a simple interface for type safety (Best Practice)
export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

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
    return this.http.post(this.apiUrl + '/register', body);
  }

  login(userData: any): Observable<any> {
    const body = { email: userData.email, password: userData.password };
    return this.http.post(this.apiUrl + '/login', body);
  }
}