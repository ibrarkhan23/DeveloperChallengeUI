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
  author: any;
  content: any;
  constructor(private quotableService:QuotableService){

  }
  ngOnInit(): void {
    this.getRandomQuots();
  }

  // getRandomQuots(){
  //   this.quotableService.getRandomQuote().subscribe((res:any)=>{
  //     debugger
  //     this.quotes = res;
  //     this.author = res.author;
  //     this.content = res.content;
  //   })
  // }
  getRandomQuots(): void {
    this.quotableService.getRandomQuote().subscribe(
      data => {
        debugger
        this.quotes = data;
        this.author = data.author;
        this.content = data.content;
       // this.quotes =  Json(data);

        console.log(this.quotes); // <-- here instead
      },
    );
  }
  getRandomQuotss(){
    this.quotableService.getRandomQuote().pipe(map((data:any)=> data),
    catchError(error=> {
      throw ('its error')
    }))
  }

}
