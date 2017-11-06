import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string}

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesService: QuotesService){

  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  /* // Add elvis operator (?) in template to use this approach
  ionViewDidLoad(){
    this.quoteGroup = this.navParams.data;
  }
  */

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        //'OK'
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK');
            this.quotesService.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

}
