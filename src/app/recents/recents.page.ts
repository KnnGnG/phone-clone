// recents.page.ts
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.page.html',
  styleUrls: ['./recents.page.scss'],
  standalone: false,
})
export class RecentsPage {
  segmentValue = 'all';
  recents = [
    { name: 'Uncle Loloy', time: 'Sun 5:40 pm', initial: 'U', color: '#fcd34d', network: 'TNT', type: 'Mobile', missed: false },
    { name: '0951 153 4823', time: '8 Jun, 6:30 pm', initial: 'O', color: '#4ade80', network: 'TNT', type: 'Philippines', missed: false },
    { name: '0998 472 0350', time: '25 May, 12:24 pm', initial: 'O', color: '#f87171', network: 'TNT', type: 'Philippines', missed: false },
    { name: 'Papa New / Aike Guk-ong', time: '28 Mar, 7:30 pm', initial: 'P', color: '#60a5fa', network: 'TNT', type: 'Mobile', missed: false },
    { name: '0927 798 2285', time: '20 Jan, 12:44 pm', initial: 'O', color: '#a78bfa', network: 'TNT', type: 'Philippines', missed: false },
    { name: '0912 709 6567', time: '11 Jan, 11:40 am', initial: 'O', color: '#f87171', network: 'TNT', type: 'Philippines', missed: true }
  ];

  constructor(private actionSheetCtrl: ActionSheetController) {}

  get filteredRecents() {
    if (this.segmentValue === 'missed') {
      return this.recents.filter(call => call.missed);
    }
    return this.recents;
  }

  async openCallActions(call: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: call.name,
      buttons: [
        {
          text: 'Call',
          icon: 'call-outline',
          handler: () => {
            console.log('Call', call.name);
          }
        },
        {
          text: 'Message',
          icon: 'chatbubble-outline',
          handler: () => {
            console.log('Message', call.name);
          }
        },
        {
          text: 'Video',
          icon: 'videocam-outline',
          handler: () => {
            console.log('Video call', call.name);
          }
        },
        {
          text: 'History',
          icon: 'time-outline',
          handler: () => {
            console.log('Call history', call.name);
          }
        },
        {
          text: 'Contact info',
          icon: 'information-circle-outline',
          handler: () => {
            console.log('Contact info', call.name);
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