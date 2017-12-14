//New Stuff 12-14-17

import {
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {
  BaseRequestOptions,
  Response,
  Http,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {PostService} from './post.service';
import {Post} from '../classes/post';

describe('Service: PostService', () => {
  let backend: MockBackend;
  let service: PostService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        PostService,
        Http,
        HttpClient,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: HttpClient,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });

    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(PostService);

  }));

  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url === 'api/forms') {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);

        connection.mockRespond(response);
      }
    });
  }

//its go here
  it('should return the list of posts from the server on success',() => {
    setupConnections(backend, {

      body: {
        posts: [
          {
            postId: 1,
            userId: 1,
            threadId: 1,
            timestamp: "",
            content: "User1, Thread1, HAHAHAH"
          },
          {
            postId: 2,
            userId: 2,
            threadId: 1,
            timestamp: "",
            content: "User2, Thread1, What\"s so funny?"
          },
          {
            postId: 3,
            userId: 3,
            threadId: 1,
            timestamp: "",
            content: "User3, Thread1, You didn\"t hear?"
          },
          {
            postId: 4,
            userId: 4,
            threadId: 1,
            timestamp: "",
            content: "User4, Thread1, Oh, about Bob?"
          }
        ]
      },
      status: 200
    });
    service.getPosts().subscribe((posts: Post[]) => {
      expect(posts.length).toBe(4);
      expect(posts[0].postId).toEqual(1);
      expect(posts[1].userId).toEqual(2);
      expect(posts[2].threadId).toEqual(-1);
      expect(posts[3].timestamp).toEqual('');
    });
  });
});


// import {TestBed, async, inject} from '@angular/core/testing';
// import {Post} from './../classes/post';
// import {PostService} from './../services/post.service';
//
// describe('PostService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [PostService]
//     });
//   });
//
//   it('should...', inject([PostService], (service: PostService) => {
//     expect(service).toBeTruthy();
//   }));
//
//   describe('#getAllPosts()', () => {
//
//     it('should return an empty array by default', inject([PostService], (service: PostService) => {
//       expect(service.getAllPosts()).toEqual([]);
//     }));
//
//     it('should return all posts', inject([PostService], (service: PostService) => {
//       let post1 = new Post({"postId": 5, "userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       let post2 = new Post({"postId": 6, "userId": 4, "threadId": 2, "timestamp": "", "content": "User4, Thread2, You don\"t know already?"});
//       service.addPost(post1);
//       service.addPost(post2);
//       expect(service.getAllPosts()).toEqual([post1, post2]);
//     }));
//
//   });
//
//   describe('#save(post)', () => {
//
//     it('should automatically assign an incrementing id', inject([PostService], (service: PostService) => {
//       let post1 = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       let post2 = new Post({"userId": 4, "threadId": 2, "timestamp": "", "content": "User4, Thread2, You don\"t know already?"});
//       service.addPost(post1);
//       service.addPost(post2);
//       expect(service.getPostById(1)).toEqual(post1);
//       expect(service.getPostById(2)).toEqual(post2);
//     }));
//
//   });
//
//   describe('#deletePostById(id)', () => {
//
//     it('should remove post with the corresponding id', inject([PostService], (service: PostService) => {
//       let post1 = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       let post2 = new Post({"userId": 4, "threadId": 2, "timestamp": "", "content": "User4, Thread2, You don\"t know already?"});
//       service.addPost(post1);
//       service.addPost(post2);
//       expect(service.getAllPosts()).toEqual([post1, post2]);
//       service.deletePostById(1);
//       expect(service.getAllPosts()).toEqual([post2]);
//       service.deletePostById(2);
//       expect(service.getAllPosts()).toEqual([]);
//     }));
//
//     it('should not remove anything if post with corresponding id is not found', inject([PostService], (service: PostService) => {
//       let post1 = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       let post2 = new Post({"userId": 4, "threadId": 2, "timestamp": "", "content": "User4, Thread2, You don\"t know already?"});
//       service.addPost(post1);
//       service.addPost(post2);
//       expect(service.getAllPosts()).toEqual([post1, post2]);
//       service.deletePostById(3);
//       expect(service.getAllPosts()).toEqual([post1, post2]);
//     }));
//
//   });
//
//   describe('#updatePostById(id, values)', () => {
//
//     it('should return post with the corresponding id and updated data', inject([PostService], (service: PostService) => {
//       let post = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       service.addPost(post);
//       let updatedPost = service.updatePostById(1, {
//         content: 'new title'
//       });
//       expect(updatedPost.content).toEqual('new title');
//     }));
//
//     it('should return null if post is not found', inject([PostService], (service: PostService) => {
//       let post = new Post({"userId": 1, "threadId": 2, "timestamp": "", "content": "User1, Thread2, Who\"s saying these things?"});
//       service.addPost(post);
//       let updatedPost = service.updatePostById(2, {
//         title: 'new title'
//       });
//       expect(updatedPost).toEqual(null);
//     }));
//
//   });
//
// });

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
