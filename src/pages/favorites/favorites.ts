import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage{
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      this.quotesService.removeQuoteFromFavorite(quote);
      let idx = this.quotes.indexOf(quote);

      this.quotes.splice(idx, 1);
    });
  }

}
