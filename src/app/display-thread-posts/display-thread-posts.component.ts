import {Component, OnInit} from '@angular/core';
import {Post} from './../classes/post';
import {PostService} from './../services/post.service';
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'app-display-thread-posts-component',
  templateUrl: './display-thread-posts.component.html',
  styleUrls: ['./display-thread-posts.component.css']
})
export class DisplayThreadPostsComponent implements OnInit {

  activeThreadId: number;
  postsToDisplay: Post[];
  observer:Observer<Post[]>;

  constructor(private postService:PostService) {
    this.observer = {
      next: (value) => {this.postsToDisplay = value;
        },
      error: function (value){},
      complete: function (){
        console.log('Done');
      }
    }
  }

  removePost(post:Post):void{
    //this.postService.deletePostById(post.postId);
  }

  get PostsToDisplay(){
    return this.postsToDisplay;
  }

  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe(this.observer);

    //Get the activeThreadId from the threadService and assign to this.activeThreadId;
    //Pass this.activeThreadId to the postService and assign returned Array to this.postsToDisplay
    //Loop over the elements in the array and call the displayPost component to display each post

  }

}
