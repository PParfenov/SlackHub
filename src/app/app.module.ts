import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { DisplayThreadPostsComponent } from './display-thread-posts/display-thread-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponentComponent,
    DisplayThreadPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
