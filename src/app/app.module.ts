import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActionsPadComponent } from './actions-pad/actions-pad.component';
import { TranscriptsContainerComponent } from './transcripts-container/transcripts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ActionsPadComponent,
    TranscriptsContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
