export class Post {

  postId: number; // Static generation +1?
  userId: number; // Provided by user service
  threadId: number; // Provided by thread service
  timestamp: string;//Date; // Generated at construction
  content: string; //provided by text input

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
