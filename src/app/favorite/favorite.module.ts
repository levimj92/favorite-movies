import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import {FavoriteRoutingModule} from './favorite-routing.module';
import {MovieModule} from '../movie/movie.module';



@NgModule({
  declarations: [FavoritePageComponent],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MovieModule
  ]
})
export class FavoriteModule { }
