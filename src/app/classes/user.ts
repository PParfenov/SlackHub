export class User {

  userId: number;
  name: string;
  threadIdList: Array<number>;
  postIdList: Array<number>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
