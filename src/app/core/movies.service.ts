import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Movie } from '../models/movie';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class MoviesService {

  private readonly apiKey = '9b69d949';
  private readonly baseUrl = 'http://omdbapi.com';

  constructor(private httpClient: HttpClient) {
  }

  fetchMovies(search: string, page: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseUrl, {
      params: new HttpParams()
        .set('apikey', this.apiKey)
        .set('s', search)
        .set('page', page)
    });
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.baseUrl, {
      params: new HttpParams()
        .set('apikey', this.apiKey)
        .set('plot', 'full')
        .set('i', id)
    });
  }
}
