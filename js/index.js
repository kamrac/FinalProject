import itemsController from "./itemsController.js";
const postsController = new itemsController(0);
/*
1.Connect type module files
2.create Dom variables to Grab from input
4. Store input in items controller
5. Write event listener that grabs input and stores it in itemController
*/

let button = document.getElementById("btn");
//when the click event listener fires on button the added event listener reads the info and stores input in variables creates inside anonymous function in event handler
button.addEventListener("click", () => {
  let newPostFirstName = document.getElementById("firstName");
  let newPostParagraphText = document.getElementById("textP");
  let newPostTitle = document.getElementById("postTitle");
  let newPostImageURL = document.getElementById("newPostImageUrl");
  console.log(
    newPostFirstName.value,
    newPostParagraphText.value,
    newPostTitle.value,
    newPostImageURL.value
  );

  //pass grabbed input into new variables
  const fName = newPostFirstName.value;
  const paragraphText = newPostParagraphText.value;
  const newTitle = newPostTitle.value;
  const newPostImage = newPostImageURL.value;

  //store variables with the input in itemsController;
  postController.methodToAddPost(newTitle, fName, newPostImage, paragraphText);

  //Clear Form
  newPostFirstName.value = "";
  newPostParagraphText.value = "";
  newPostTitle.value = "";
  newPostImageURL.value = "";
});

function addPostCard(item) {
  const itemHTML =
    '<div class="card"  >\n' +
    '<h2 class="card-firstName"> Title: ' +
    item.newTitle +
    "</h2>\n" +
    '<h3 class="card-firstName">' +
    "Name: " +
    item.fName +
    "</h3>\n" +
    "<img src =" +
    item.newPostImage +
    " >\n" +
    '<p class="card-text ">' +
    "COMMENT:" +
    "<br/>" +
    item.paragraphText +
    "</p>\n" +
    " </div>\n" +
    "</div>\n" +
    "<br/>";

  const displayPosts = document.getElementById("displayPosts");
  displayPosts.innerHTML += itemHTML;
}

// addPostCard({
//   newTitle: "MY Post",
//   fName: "Lizette",
//   paragraphText: "THIS IS MY FIRST POST",
//   newPostImage:
//     "https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// });

//save data to local storage using setItem. Pass the correct data
localStorage.setItem("postsArray", JSON.stringify());

// //use local storage to load data
// function loadMyDataFromLocalStorage() {
//   const myMessage = JSON.parse(localStorage.getItem("postsArray"));
// }

//console.log(addPostCard);

// loadMyDataFromLocalStorage();
