import { Component, OnInit } from '@angular/core';
import { TranscriptService } from '../transcript.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-transcripts-container',
  templateUrl: './transcripts-container.component.html',
  styleUrls: ['./transcripts-container.component.scss']
})
export class TranscriptsContainerComponent implements OnInit {

  transcripts: [];

  constructor(private transcriptService: TranscriptService, private messageService: MessageService) { }

  ngOnInit() {
    this.getTranscripts();
  }

  getTranscripts(): void {
    this.transcriptService.getHeroes()
        .subscribe(heroes => this.transcripts = heroes);
  }

}
