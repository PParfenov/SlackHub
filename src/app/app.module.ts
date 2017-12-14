import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThreadService } from './services/thread.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'thread', component: DisplayThreadPostsComponent },
        { path: '', redirectTo: 'thread', pathMatch: 'full'},
        { path: '**', redirectTo: 'thread', pathMatch: 'full'}
    ])
  ],
  providers: [ThreadService, PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
