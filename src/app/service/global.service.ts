
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiUrl = environment.apiUrl+"/global"
  constructor(private http: HttpClient, private router: Router) { }
  getUserIDFromLocal() {
    const item = localStorage.getItem('userDetail');
    if (item) {
      let jsonDetail = JSON.parse(item)
      return jsonDetail.id
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
  getBrand(userData: any): Observable<any> {
    return this.http.get(this.apiUrl + '/getbrand/' + userData, { withCredentials: true });
  }
  getModel(userData: any, brand_id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/getmodel/' + userData + '?brand_id=' + brand_id, { withCredentials: true });
  }
}