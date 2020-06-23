import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Movie} from '../../models/movie';
import {FavoritesStore} from '../../core/favorites-store';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsPageComponent {

  @Input()
  public movie: Movie;

  constructor(private favoritesStore: FavoritesStore, private changeDetectorRef: ChangeDetectorRef) {
  }

  private check(): void {
    this.changeDetectorRef.markForCheck();
  }

  public handleFavorite(movie: Movie): void {
    if (this.isFavoritedMovie(movie)) {
      this.favoritesStore.remove(movie);
    } else {
      this.favoritesStore.add(movie);
    }
    this.check();
  }

  public isFavoritedMovie(movie: Movie): boolean {
    return this.favoritesStore.has(movie);
  }
}
