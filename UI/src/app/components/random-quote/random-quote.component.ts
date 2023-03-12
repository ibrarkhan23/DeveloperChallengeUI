import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { QuotableService } from 'src/app/services/quotable.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit{
  quotes:any[]=[];
  constructor(private quotableService:QuotableService){

  }
  ngOnInit(): void {
    this.getRandomQuots();
  }

  // getRandomQuots(){
  //   this.quotableService.getRandomQuote().subscribe((res:any)=>{
  //     debugger
  //     this.quotes = res;
  //   })
  // }
  getRandomQuots(): void {
    this.quotableService.getRandomQuote().subscribe(
      data => {
        this.quotes = data;
        console.log(this.quotes); // <-- here instead
      },
      err => console.error(err),
      () => console.log('Wiki Items Geladen')
    );
  }
  getRandomQuotss(){
    this.quotableService.getRandomQuote().pipe(map((data:any)=> data),
    catchError(error=> {
      throw ('its error')
    }))
  }

}
