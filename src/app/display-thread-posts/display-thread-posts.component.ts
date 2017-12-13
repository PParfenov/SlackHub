import {Component, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-display-posts-component',
  templateUrl: './display-thread-posts.component.html',
  styleUrls: ['./display-thread-posts.component.css']
})
export class DisplayThreadPostsComponent implements OnInit {

  private activeThreadId: number;
  private postIdsToDisplay: Array<Post>;

  constructor() {
  }

  ngOnInit() {

    //Get the activeThreadId from the threadService and assign to this.activeThreadId;
    //Pass this.activeThreadId to the postService and assign returned Array to

  }

}
