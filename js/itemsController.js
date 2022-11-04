export default class itemsController {
    constructor(currentId = 0) {
      this.posts = [];
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
  this.posts.push(post);
  } 

  loadPostsFromLocalStorage() {
    const storagePosts = localStorage.getItem("posts")
    if (storagePosts) {
        const posts = JSON.parse(storagePosts)
        for (let i = 0, size = posts.length; i < size; i++) {
          const post = posts[i];
          this.posts.push(post);
        //TODO load the posts into the local posts structure (this.posts)           
    }
}
}
}
