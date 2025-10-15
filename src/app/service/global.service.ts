
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class GlobalService {
  private apiUrl = 'http://localhost:3000/api/user'; // Your Express API URL

  constructor(private http: HttpClient) { }
}