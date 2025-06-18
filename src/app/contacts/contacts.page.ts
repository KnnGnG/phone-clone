// contacts.page.ts
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: false,
})
export class ContactsPage {
  contacts = [
    { name: '*123#', type: 'Mobile', network: 'GLOBE' },
    { name: '*143#', type: 'Mobile', network: 'GLOBE' },
    { name: 'A Globe', type: 'Mobile', network: 'GLOBE' },
    { name: 'A NEW DITO', type: 'Mobile', network: 'DITO' },
    { name: 'A New TNT', type: 'Mobile', network: 'TNT' },
    { name: 'A Smart', type: 'Mobile', network: 'SMART' },
    { name: 'A TNT', type: 'Mobile', network: 'TNT' },
    { name: 'Angel', type: 'Mobile', network: 'GLOBE' },
    { name: 'Daiserie', type: 'Mobile', network: 'SMART' },
    { name: 'Jean Claude', type: 'Mobile', network: 'TNT' },
    { name: 'John Mark', type: 'Mobile', network: 'GLOBE' }
  ];

  constructor(private actionSheetCtrl: ActionSheetController) {}

  getRandomColor() {
    const colors = ['#f87171', '#4ade80', '#fcd34d', '#60a5fa', '#a78bfa'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  async openContactActions(contact: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: contact.name,
      buttons: [
        {
          text: 'Call',
          icon: 'call-outline',
          handler: () => {
            console.log('Call', contact.name);
          }
        },
        {
          text: 'Message',
          icon: 'chatbubble-outline',
          handler: () => {
            console.log('Message', contact.name);
          }
        },
        {
          text: 'Video',
          icon: 'videocam-outline',
          handler: () => {
            console.log('Video call', contact.name);
          }
        },
        {
          text: 'Contact info',
          icon: 'information-circle-outline',
          handler: () => {
            console.log('Contact info', contact.name);
          }
        },
        {
          text: 'Contact settings',
          icon: 'settings-outline',
          handler: () => {
            console.log('Contact settings', contact.name);
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

  openSettingsMenu(event: Event) {
    event.stopPropagation();
    console.log('Settings menu clicked');
    // You can implement a separate action sheet for settings if needed
  }
}