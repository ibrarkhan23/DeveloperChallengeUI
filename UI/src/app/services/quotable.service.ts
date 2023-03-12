import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuotableService {
  baseUrl:string ='http://localhost:5000/api'
  constructor(private http: HttpClient) { }
  getRandomQuote() {
    // return this.http.get('https://api.quotable.io/random');
    return this.http.get('https://api.quotable.io/random').pipe(map((response: any) => response));

    }
    getQuoteByAuthor() {
    return this.http.get('https://quotable.io/quotes?author=albert-einstein&limit=30').pipe(map((response: any) => response));

   // return this.http.get(this.baseUrl+'/quotable/getByAuthor');
  }
}
