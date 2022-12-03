import itemsController from "./itemsController.js";
const postsController = new itemsController(0);
/*
1.Connect type module files
2.create Dom variables to Grab from input
4. Store input in items controller
5. Write event listener that grabs input and stores it in itemController
*/

// creating DOM variables 
let button = document.getElementById("btn");
let postsForm = document.getElementById("postsForm");
let displayPostsCont = document.querySelector(".displayPosts");
let titleInput = document.getElementById("postTitle");
let authorInput = document.getElementById("authorName");
let textInput = document.getElementById("textP");
let imageInput = document.getElementById("newPostImageUrl");

//display items from local storage
const posts = JSON.parse(localStorage.getItem("posts")) || [];

const addPost = (title, author, text, image) => {
  posts.push({
  title,
  author,
  text,
  image
});
// Add items to local storage
  localStorage.setItem("posts",JSON.stringify(posts));

  return {title, author, text, image};
};


//  Create the the blog post with elements, then append it

const createBlogPostElement = ({title, author, text, image}) => {
  //create elements
  const postDiv = document.createElement('div');
  const blogPostTitle = document.createElement('h2');
  const authorName = document.createElement('h6');
  const authorPost = document.createElement('p');
  const authorImg = document.createElement('img')
 

  // add in content
  blogPostTitle.innerText = "Blog post title: " + title;
  authorName.innerText = "Author name: " + author;
  authorPost.innerText = "post: " + text;
  authorImg.src = image;
  // authorImg.setAttribute("alt", "an appropriate description of the image for accessibility");

  // add  to the DOM
  postDiv.append(blogPostTitle, authorName, authorPost, authorImg);
  displayPostsCont.appendChild(postDiv);
}

posts.forEach(createBlogPostElement);

//when the click event listener fires on button the added event listener reads the info and stores input in variables creates inside anonymous function in event handler
postsForm.onsubmit =e => {
  e.preventDefault();

  const newPost = addPost(
  titleInput.value,
  authorInput.value,
  textInput.value, 
  imageInput.value)
  


  createBlogPostElement(newPost)  
  
  // //Clear Form
  titleInput.value = "";
  authorInput.value = "";
  textInput.value = "";
  imageInput.value = "";
};

