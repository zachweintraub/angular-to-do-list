import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskNewComponent } from './task-new/task-new.component';


@NgModule({

  //import components
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskEditComponent,
    TaskNewComponent
  ],

  //import other modules
  imports: [
    BrowserModule,
    FormsModule
  ],

  //add services/classes/static values
  providers: [],

  //components to load on start
  bootstrap: [AppComponent]
})
export class AppModule { }
