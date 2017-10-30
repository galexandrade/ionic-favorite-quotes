import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage: QuotesPage;

  constructor(private navCtrl: NavController){
  }

  ngOnInit(){
    this.quoteCollection = quotes;
  }

  onGoToQuotesPage(quoteGroup){
    this.navCtrl.push(QuotesPage, quoteGroup);
  }
}
