import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import TRANSCRIPTS from './transcript-mock-data.json';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TranscriptService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(TRANSCRIPTS);
  }
}