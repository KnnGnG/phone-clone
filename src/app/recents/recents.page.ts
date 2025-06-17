import { Component } from '@angular/core';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.page.html',
  styleUrls: ['./recents.page.scss'],
  standalone: false,
})
export class RecentsPage {
  recents = [
    { name: 'Uncle Loloy', time: 'Sun 5:40 pm', initial: 'U', color: '#fcd34d', network: 'TNT' },
    { name: '0951 153 4823', time: '8 Jun, 6:30 pm', initial: 'O', color: '#4ade80', network: 'TNT' },
    { name: '0998 472 0350', time: '25 May, 12:24 pm', initial: 'O', color: '#f87171', network: 'TNT' },
    { name: 'Papa New / Aike Guk-ong', time: '28 Mar, 7:30 pm', initial: 'P', color: '#60a5fa', network: 'TNT' },
    { name: '0927 798 2285', time: '20 Jan, 12:44 pm', initial: 'O', color: '#a78bfa', network: 'TNT' },
    { name: '0912 709 6567', time: '11 Jan, 11:40 am', initial: 'O', color: '#f87171', network: 'TNT' }
  ];
}