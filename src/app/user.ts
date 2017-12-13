export class User {

  static userIdSeed = 1;
  userId: number; // Static generation +1?
  name: string;
  threadIdList: Array<number>;
  postIdList: Array<number>;

  constructor(name: string, threadIdList: Array<number>, postIdList: Array<number>) {
    this.userId = User.userIdSeed;
    User.userIdSeed++;
    this.name = name;
    this.threadIdList = threadIdList;
    this.postIdList = postIdList;

  }

}
