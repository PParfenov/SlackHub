import {Component, OnInit} from '@angular/core';
import {Post} from './../classes/post';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  private postToDisplay: Post;

  constructor(postToDisplay:Post) {
    this.postToDisplay=postToDisplay;
  }



  ngOnInit() {

  }

}
