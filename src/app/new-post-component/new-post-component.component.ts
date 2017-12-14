import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../classes/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {

  newPost:Post = new Post;

  constructor(private postService:PostService) { }

  addPost():void{
    //TODO, replace the threadId, timestamp, and UserID with dynamic values
    this.newPost.postId=-1;//Remove this and generate dynamically
    this.newPost.threadId=-1;//ActiveThreadIdPassedFromDisplayWindow?
    this.newPost.userId=-1;//ActiveUserIdPassedFromDisplayWindow?
    this.newPost.timestamp="";//Eventually replace with a new date/time json
    this.postService.addPost(this.newPost).subscribe();
    this.newPost=new Post;

  }

  ngOnInit() {
  }

}
