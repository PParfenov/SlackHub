import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { DisplayPostsComponentComponent } from './display-posts-component/display-posts-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponentComponent,
    DisplayPostsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
