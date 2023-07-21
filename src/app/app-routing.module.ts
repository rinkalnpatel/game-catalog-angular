// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// Components
import { NotFoundComponent } from './static/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
