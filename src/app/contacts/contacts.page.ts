import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: false,
})
export class ContactsPage {
  contacts = [
    { name: '*123#' },
    { name: '*143#' },
    { name: 'A Globe' },
    { name: 'A NEW DITO' },
    { name: 'A New TNT' },
    { name: 'A Smart' },
    { name: 'A TNT' },
    { name: 'Angel Pagunsan' },
    { name: 'Daiserie Manacho' },
    { name: 'Jean Claude Lequigan' },
    { name: 'John Mark Ariban' }
  ];

  getRandomColor() {
    const colors = ['#f87171', '#4ade80', '#fcd34d', '#60a5fa', '#a78bfa'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}