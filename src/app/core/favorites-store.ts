import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Movie} from '../models/movie';

@Injectable()
export class FavoritesStore {

  private readonly store = new BehaviorSubject<Movie[]>([]);
  public favorite$ = this.store.asObservable();

  constructor() {
  }

  fetchAll(): Movie[] {
    return this.store.getValue();
  }

  add(movie: Movie): void {
    this.store.next([...this.fetchAll(), movie]);
  }

  remove(movie: Movie): void {
    this.store.next(this.fetchAll().filter(storedMovie => movie.imdbID !== storedMovie.imdbID));
  }

  has(movie: Movie): boolean {
    return this.fetchAll().some(storedMovie => movie.imdbID === storedMovie.imdbID);
  }
}
