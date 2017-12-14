export class Thread {

  threadId: number; // Static generation +1?
  name: string;
  description: string;
  userIdList: Array<number>; // Provided by user service
  postIdList: Array<number>; // Provided by thread service

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
