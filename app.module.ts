import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IssueService } from './issue.service';

import { AppComponent } from './app.component';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
