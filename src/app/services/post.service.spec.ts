import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { PostService } from './post.service';
import { Post } from './../post'

describe('PostService', () => {
  
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [PostService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  it('should return post with ID=8',
  async(inject([PostService], (service: PostService) => {

    let expectedPost: Post = <Post>JSON.parse('{"postId": 8, "userId": 1, "threadId": 1, "timestamp": "", "content": "User1, Thread1, Once you hear it you\'ll never think about Bob the same way again"}');
    let actualPost: Post;
    service.getPost(8).subscribe(
      post => this.actualPost = post,
      error => this.errorMessage = <any>error);
    expect(actualPost).toEqual(expectedPost);
})));
});
