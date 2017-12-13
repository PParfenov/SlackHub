export class Post {

  private static postIdSeed = 1;
  postId: number; // Static generation +1?
  userId: number; // Provided by user service
  threadId: number; // Provided by thread service
  timestamp: string;//Date; // Generated at construction
  content: string; //

  constructor(userId: number, threadId: number, content: string) {
    //this.timestamp = new Date();
    this.timestamp = 'DateTimeStub: ' + userId + ' ' + threadId + ' ' + 'am/pm';
    this.postId = Post.postIdSeed;
    Post.postIdSeed++;
    this.userId = userId;
    this.threadId = threadId;
    this.content = content;
  }

}
