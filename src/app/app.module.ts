import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolchampListComponent } from './lolchamp-list/lolchamp-list.component';
import { LolchampCreateComponent } from './lolchamp-create/lolchamp-create.component';
import { LolchampEditComponent } from './lolchamp-edit/lolchamp-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LolchampListComponent,
    LolchampCreateComponent,
    LolchampEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
