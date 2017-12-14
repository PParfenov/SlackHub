import {Component, OnInit, Input} from '@angular/core';
import {Post} from './../classes/post';

import {MatMenuModule} from '@angular/material/menu';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  @Input('postId')
  postId: number;

  postToDisplay: Post;

  constructor(private postService: PostService, postId) {
    this.postToDisplay=this.postService.getPostById(postId);
  }



  ngOnInit() {

  }

}
