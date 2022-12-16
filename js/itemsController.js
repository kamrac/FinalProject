export default class ItemsController {
  constructor(currentId = 0) {
    this.postsArray = [];
    this.currentId = currentId;
  }

  // create the addPost method
  methodToAddPost(postTitle, firstName, image, text) {
    const newPost = {
      id: this.currentId++,
      postTitle: postTitle,
      firstName: firstName,
      image: image,
      text: text,
    };

    //push the post to the content property
    this.postsArray.push(newPost);
  }
  save(title, author, date, text, imageUrl) {
    const data = {title, author, date, text, imageUrl };
  
    fetch('http://localhost:8080/post', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
  }  
  update({title, author, date, text, imageUrl}){
    //TODO implement this method
}

delete(postId){
    //TODO implement this method
}

findById(postId){
    //TODO implement this method
}
};



