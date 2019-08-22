import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat/chat.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageViewComponent } from './message/message-view/message-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageListComponent,
    MessageViewComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
