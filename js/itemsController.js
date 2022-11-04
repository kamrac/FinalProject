export default class itemsController {
    constructor(currentId = 0) {
      this.content = [];
      this.currentId = currentId;
    }

  // create the addPost method 
  addPost(postTitle, createdAt, author, imgU, text) {
    const post = {
      id:this.currentId++,
      postTitle: postTitle,
      createdAt: createdAt,
      author: author,
      imgU: imgU,    
      text: text
  };

  //push the post to the content property
  this.content.push(post);
  } 

}


