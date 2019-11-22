import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacterInformations(urlList: string[]) {
    const characters$ = urlList.map(url => this.http.get<Character>(url));
    console.log('SERVICE LIST?', characters$);
    return forkJoin(characters$);
  }
}
