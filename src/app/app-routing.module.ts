import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: () => import ('./favorite/favorite.module').then(module => module.FavoriteModule)
  },
  {
    path: 'movies',
    loadChildren: () => import ('./movie/movie.module').then(module => module.MovieModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
