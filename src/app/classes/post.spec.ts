import {Post} from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let post = new Post({
        "userId": 1, 
        "threadId": 2, 
        "timestamp": "sometime today", 
        "content": "User1, Thread2, Who\"s saying these things?"
    });
    expect(post.userId).toEqual(1);
    expect(post.threadId).toEqual(2);
    expect(post.timestamp).toEqual("sometime today");
    expect(post.content).toEqual("User1, Thread2, Who\"s saying these things?");
  });
});