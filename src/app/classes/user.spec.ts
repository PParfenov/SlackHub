import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

//   it('should accept values in the constructor', () => {
//     let post = new Post({
//         "postId": 5, 
//         "userId": 1, 
//         "threadId": 2, 
//         "timestamp": "sometime today", 
//         "content": "User1, Thread2, Who\"s saying these things?"
//     });
//     expect(post.postId).toEqual(5);
//     expect(post.userId).toEqual(1);
//     expect(post.threadId).toEqual(2);
//     expect(post.timestamp).toEqual("sometime today");
//     expect(post.content).toEqual("User1, Thread2, Who\"s saying these things?");
//   });
});