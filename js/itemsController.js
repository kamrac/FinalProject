export default class itemsController {
  constructor(post) {
    this.post = [];
  }

  postControlFunc() {
    console.log(this.post);
  }
}

const controller = new itemsController([]);
controller.postControlFunc([]);
