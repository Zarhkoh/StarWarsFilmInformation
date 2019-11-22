import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Movie } from 'src/app/models/movie.model';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-movie-select',
  templateUrl: './movie-select.component.html',
  styleUrls: ['./movie-select.component.css']
})
export class MovieSelectComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  movieForInformations: Movie;
  characters: Character[];
  loaded: boolean;
  error: string;

  constructor(private filmService: FilmService, private characterService: CharacterService) { }



  ngOnInit() {
    this.loaded = true;
    this.getMovies();
  }
  getMovies() {
    new Promise((resolve, reject) => {
      this.filmService.getMovies().subscribe(
        data => {
          this.movies = data;
          resolve();
        },
        error => {
          this.loaded = true;
          this.handleError();
        });
    }).then();
  }

  showMovieInformations() {
    if (this.selectedMovie) {
      this.loaded = false;
      this.characters = [];
      this.movieForInformations = this.selectedMovie;
      this.characterService.getCharacterInformations(this.selectedMovie.characters).subscribe(response => {
        this.characters = response;
        this.loaded = true;
      });
    }
  }
  handleError() {
    this.error = 'il semblerait qu\'un porg ait mangé votre câble réseau..';
    this.loaded = true;
  }
}
