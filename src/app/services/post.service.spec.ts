import {TestBed, async, inject} from '@angular/core/testing';
import {Post} from './../classes/post';
import {PostService} from './../services/post.service';

let post1: Post;
let post2: Post;

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService]
    });
    post1 = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
    post2 = new Post({"userId": 4, "threadId": 2, "timestamp": "", "content": "User4, Thread2, You don\"t know already?"});
  });

  it('should...', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllPosts()', () => {

    it('should return an empty array by default', inject([PostService], (service: PostService) => {
      expect(service.getAllPosts()).toEqual([]);
    }));

    it('should return all posts', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      service.addPost(post2);
      expect(service.getAllPosts()).toEqual([post1, post2]);
    }));

  });

  describe('#save(post)', () => {

    it('should automatically assign an incrementing id', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      service.addPost(post2);
      expect(service.getPostById(1)).toEqual(post1);
      expect(service.getPostById(2)).toEqual(post2);
    }));

  });

  describe('#deletePostById(id)', () => {

    it('should remove post with the corresponding id', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      service.addPost(post2);
      expect(service.getAllPosts()).toEqual([post1, post2]);
      service.deletePostById(1);
      expect(service.getAllPosts()).toEqual([post2]);
      service.deletePostById(2);
      expect(service.getAllPosts()).toEqual([]);
    }));

    it('should not remove anything if post with corresponding id is not found', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      service.addPost(post2);
      expect(service.getAllPosts()).toEqual([post1, post2]);
      service.deletePostById(3);
      expect(service.getAllPosts()).toEqual([post1, post2]);
    }));

  });

  describe('#updatePostById(id, values)', () => {

    it('should return post with the corresponding id and updated data', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      let updatedPost = service.updatePostById(1, {
        content: 'new title'
      });
      expect(updatedPost.content).toEqual('new title');
    }));

    it('should return null if post is not found', inject([PostService], (service: PostService) => {
      service.addPost(post1);
      let updatedPost = service.updatePostById(3, {
        title: 'new title'
      });
      expect(updatedPost).toEqual(null);
    }));

  });

});

// import { TestBed, inject, async } from '@angular/core/testing';

// // import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
// import { PostService } from './post.service';
// import { Post } from './../classes/post'

// describe('PostService', () => {
  
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [PostService]
//     });
//   });

//   it('should be created', inject([PostService], (service: PostService) => {
//     expect(service).toBeTruthy();
//   }));
  
//   it('should return all posts',
//   async(inject([PostService], (service: PostService) => {
  
//     let expectedPosts: Post[] ;
//     let actualPosts: Post[];
//     // service.getPost(8).subscribe(
//     //   post => this.actualPost = post,
//     //   error => this.errorMessage = <any>error);
//     expect(actualPosts).toEqual(expectedPosts);
//   })));

//   it('should return post with ID=8',
//   async(inject([PostService], (service: PostService) => {

//     let expectedPost: Post = <Post>JSON.parse('{"postId": 8, "userId": 1, "threadId": 1, "timestamp": "", "content": "User1, Thread1, Once you hear it you\'ll never think about Bob the same way again"}');
//     let actualPost: Post;
//     service.getPost(8).subscribe(
//       post => this.actualPost = post,
//       error => this.errorMessage = <any>error);
//     expect(actualPost).toEqual(expectedPost);
// })));


// });
