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
  getRandomQuots(): void {
    this.quotableService.getRandomQuote().subscribe(
      data => {
        this.author = data.author;
        this.content = data.content;
      },
    );
  }

}
