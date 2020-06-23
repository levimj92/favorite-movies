import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../core/movies.service';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, pluck, switchMap} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public form: FormGroup;
  public searchHint$: Observable<Movie[]>;
  public movie$: Observable<Movie>;

  constructor(
    private moviesService: MoviesService,
    private formBiulder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initSearchHintUpdateListener();
    this.initMovieSelectListener();
  }

  private initForm(): void {
    this.form = this.formBiulder.group({
      search: ['', Validators.required],
      movie: null
    });
  }

  private initSearchHintUpdateListener(): void {
    this.searchHint$ = this.form.get('search').valueChanges
      .pipe(
        debounceTime(400),
        filter(search => !!search && search.length >= 3),
        distinctUntilChanged(),
        switchMap(search => this.moviesService.fetchMovies(search, '1')),
        pluck('Search')
      );
  }

  private initMovieSelectListener(): void {
    this.movie$ = this.form.get('movie').valueChanges
      .pipe(
        filter(movie => !!movie),
        distinctUntilChanged(),
        switchMap(movie => this.moviesService.getMovie(movie.imdbID))
      );
  }

  public displayWith(movie: Movie): string {
    return movie.Title || undefined;
  }

  public setMovie($event: MatAutocompleteSelectedEvent) {
    this.form.get('movie').setValue($event.option.value);
  }
}
