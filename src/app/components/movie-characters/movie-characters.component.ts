import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-movie-characters',
  templateUrl: './movie-characters.component.html',
  styleUrls: ['./movie-characters.component.css']
})
export class MovieCharactersComponent implements OnInit {
  @Input() characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

  }

}
