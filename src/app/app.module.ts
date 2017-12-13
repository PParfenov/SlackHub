import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { DisplayThreadPostsComponent } from './display-thread-posts/display-thread-posts.component';
import { DisplayPostComponent } from './display-post/display-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponentComponent,
    DisplayThreadPostsComponent,
    DisplayPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
