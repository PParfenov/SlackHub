export class User {

  private static userIdSeed = 1;
  userId: number;
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
