export class Thread {

  static threadIdSeed = 1;
  threadId: number; // Static generation +1?
  name: string;
  description: string;
  userIdList: Array<number>; // Provided by user service
  postIdList: Array<number>; // Provided by thread service

  constructor(name: string, description: string, userIdList: Array<number>, postIdList: Array<number>) {
    this.threadId = Thread.threadIdSeed;
    Thread.threadIdSeed++;
    this.name = name;
    this.description = description;
    this.userIdList = userIdList;
    this.postIdList = postIdList;

  }

}
