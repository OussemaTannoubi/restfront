import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraficServiceService {
  private baseurl="http://localhost:8082/traffic";

  constructor(private http : HttpClient) { }

  getAllTraffic():Observable<any>{
    return this.http.get(`${this.baseurl}`);
  }


}
