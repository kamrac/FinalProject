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
let dateInput = document.getElementById("date");

// const test = postsController.get();
// console.log(test);
//display items from database
const posts = postsController.get().then(function(result){
  result.forEach(createBlogPostElement);
});


// const addPost = (title, author, date, text, image) => {
//   // postsController.methodToAddPost(title, author, date, text, image);
// // calling instance of itemscontroller to save posts
//   postsController.save(title, author, date, text, image);
//   // Add items to local storage
//   // localStorage.setItem("posts", JSON.stringify(posts));

//   // return { title, author, date, text, image };


// };

//  Create the the blog post with elements, then append it

const createBlogPostElement = ({id, title, author, date, text, imageUrl }) => {
  //create elements
  const postDiv = document.createElement("div");
  const blogPostTitle = document.createElement("h2");
  const authorName = document.createElement("h6");
  const postDate = document.createElement("p");
  postDate.setAttribute("type", "date");
  const authorPost = document.createElement("p");
  const authorImg = document.createElement("img");

  // add in content
  blogPostTitle.innerText = title;
  authorName.innerText = "By: " + author;
  postDate.innerText = date;
  authorPost.innerText = text;
  authorImg.src = imageUrl;
  // authorImg.setAttribute("alt", "an appropriate description of the image for accessibility");

  // add  to the DOM
  postDiv.append(blogPostTitle, authorName, postDate, authorPost, authorImg);
  displayPostsCont.appendChild(postDiv);
};



//when the click event listener fires on button the added event listener reads the info and stores input in variables creates inside anonymous function in event handler
postsForm.onsubmit = (e) => {
  e.preventDefault();

  const newPost = {
    title:  titleInput.value,
    author: authorInput.value,
    date: dateInput.value,
    text: textInput.value,
    imageUrl: imageInput.value
    
  };

  postsController.save(newPost);
  // createBlogPostElement(newPost);

  // //Clear Form
  titleInput.value = "";
  authorInput.value = "";
  dateInput.value = "";
  textInput.value = "";
  imageInput.value = "";
};

