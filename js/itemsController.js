export default class ItemsController {
  constructor(currentId = 0) {
    this.postsArray = [];
    this.currentId = currentId;
  }

  // create the addPost method
  methodToAddPost(title, author, date, text, image) {
    const newPost = {
      id: this.currentId++,
      title: title,
      author: author,
      date: date,
      text: text,
      image: image
      
    };

    //push the post to the content property
    this.postsArray.push(newPost);
  }
  // save posts into mysql database 
  save = ({title, author, date, text, imageUrl}) => {
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

 get() {
  return fetch('http://localhost:8080/post/all', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(response => {
      return response.json();
  })
  .then(data => {
      return data;
  })
  .catch(error => {
      return error;
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




