// favourites.page.ts
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: false,
})
export class FavouritesPage {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async openAddFavorite() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Add a favourite',
      buttons: [
        {
          text: 'From contacts',
          icon: 'people-outline',
          handler: () => {
            console.log('Add from contacts');
          }
        },
        {
          text: 'New contact',
          icon: 'person-add-outline',
          handler: () => {
            console.log('Create new contact');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
}