import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieDetailsPageComponent} from './movie-details-page/movie-details-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MovieDetailsPageComponent
  ],
  exports: [
    MovieDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MovieModule {
}
