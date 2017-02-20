import {
  Component, ViewChild
} from '@angular/core';

import {
  NavController, NavParams
} from 'ionic-angular';
import { Flash } from '../../pages/flash/flash';

@Component({
  selector: 'page-sets',
  templateUrl: 'sets.html'
})
export class Sets {
  selectedItem: any;
  icons: string[];
  setTypes: string[];
  items: Array<{title: string, note: string, icon: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['code-working', 'shuffle'];
    this.setTypes = ['Sequential', 'Random'];

    this.items = [];
    for (let i = 0; i < 2; i++) {
      this.items.push({
        title: this.setTypes[i],
        note: "Progress : 0%",
        icon: this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Flash, {
      item: item
    });
  }

}
