import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage{
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    //To return some Data use this, if not, use "modal.didLeave.subscribe()"
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemoveFromFavorite(quote);
      }      
    });
  }

  onRemoveFromFavorite(quote: Quote){
    this.quotesService.removeQuoteFromFavorite(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  isAltBackground(){
    return this.settingsService.isAlternativeBackground();
  }

}
