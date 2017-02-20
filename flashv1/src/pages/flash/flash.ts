import {
  Component
} from '@angular/core';

import {
  NavController,
  NavParams
} from 'ionic-angular';

@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html'
})
export class Flash {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    var type = "";
    if (this.selectedItem != null) {
      type = this.selectedItem.title;
    }
    switch (type) {
      case "Sequential":
        console.log("Sequential");
      case "Random":
        console.log("Random");
      default:
        break;
    }
  }
}
