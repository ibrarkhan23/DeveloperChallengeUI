import { Component, OnInit } from '@angular/core';
import { QuotableService } from 'src/app/services/quotable.service';

@Component({
  selector: 'app-einstein-quotes',
  templateUrl: './einstein-quotes.component.html',
  styleUrls: ['./einstein-quotes.component.css']
})
export class EinsteinQuotesComponent implements OnInit{
  quotes:any[]=[];
  constructor(private quotableService:QuotableService){

  }
  ngOnInit(): void {
    this.getQuoteByAuthor()
  }

  getQuoteByAuthor(){
    this.quotableService.getQuoteByAuthor().subscribe((res:any)=>{
      this.quotes = res.results;
    })
  }
}
