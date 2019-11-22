import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  url = 'https://swapi.co/api/films';

  getMovies() {
    return this.http.get<Movie[]>(this.url).pipe(map(data => data['results']));
  }

}
