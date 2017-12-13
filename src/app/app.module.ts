import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadService } from './services/thread.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
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
  providers: [ThreadService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
