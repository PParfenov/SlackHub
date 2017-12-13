import {Component, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-display-thread-posts-component',
  templateUrl: './display-thread-posts.component.html',
  styleUrls: ['./display-thread-posts.component.css']
})
export class DisplayThreadPostsComponent implements OnInit {

  private activeThreadId: number;
  private postsToDisplay: Array<Post>;

  constructor() {
  }

  ngOnInit() {

    //Get the activeThreadId from the threadService and assign to this.activeThreadId;
    //Pass this.activeThreadId to the postService and assign returned Array to this.postsToDisplay
    //Loop over the elements in the array and call the displayPost component to display each post

  }

}
