import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'favourites',
    pathMatch: 'full'
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesPageModule)
  },
  {
    path: 'recents',
    loadChildren: () => import('./recents/recents.module').then(m => m.RecentsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}