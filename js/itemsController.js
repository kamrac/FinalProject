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
}

document.getElementById('btn').addEventListener('click',
function(){
  document.querySelector('.popup').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click',
function(){
  document.querySelector('.popup').style.display = 'none';
})
