import {Component, OnInit} from '@angular/core';
import {FavoritesStore} from '../../core/favorites-store';
import {Observable, Subject} from 'rxjs';
import {Movie} from '../../models/movie';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  private movie = new Subject<Movie>();
  public favorite$: Observable<Movie[]>;
  public movie$ = this.movie.asObservable();

  constructor(private favoritesStore: FavoritesStore) {
  }

  ngOnInit(): void {
    this.favorite$ = this.favoritesStore.favorite$
      .pipe(tap(_ => this.clearMovie()));
  }

  clearMovie(): void {
    this.movie.next(null);
  }

  selectMovie(movie: Movie): void {
    this.movie.next(movie);
  }
}
