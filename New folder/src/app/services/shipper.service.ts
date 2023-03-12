import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {
  baseUrl:string ='http://localhost:5000/api'
  constructor(private http: HttpClient) { }
  getShippers() {
    return this.http.get(this.baseUrl+'/shipper');
  }
  getShipmentDetail(id:any) {
    return this.http.get(this.baseUrl+'/shipper/shipperById?id='+id);
  }
}
