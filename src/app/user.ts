export class User {

  static postIdSeed = 1;
  postId: number; // Static generation +1?
  userId: number; // Provided by user service
  threadId: number; // Provided by thread service
  timestamp: Date; // Generated at construction
  content: string; //

  constructor(userId: number, threadId: number, content: string) {
    this.timestamp = new Date();
    this.postId = Post.postIdSeed;
    Post.postIdSeed++;
    this.userId = userId;
    this.threadId = threadId;
    this.content = content;

  }

}
