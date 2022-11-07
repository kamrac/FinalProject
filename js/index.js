import itemsController from "./itemsController.js";
//const postsController = new itemsController(0);
/* controller.addPost(
    1,
    "Stressful Post",
    "2022-11-04",
    "Kamra Clemons",
    "figuring this out has been difficult, but we got this!"
  );
  console.log(controller.posts); */

// Display title and author images and stuff
function addPostCard(post) {
  let postTitle = document.getElementById("post-Title");
  let date = document.getElementById("date");
  let author = document.getElementById("author");
  let image = document.getElementById("imgU");
  let postText = document.getElementById("text");
  let button = document.getElementById("submit");

  const newPost = new itemsController(
    postTitle.value,
    date.value,
    author.value,
    image.value,
    postText.value
  );
  button.addEventListener("click", addPostCard);
  console.log(newPost);

  // for(let i = 0; post.length;i++){
  //   postTitle
  // }
}

function loadStorageSampleData() {
  if (!localStorage.getItem("posts")) {
    const samplePosts = [
      {
        name: "kamra",
        img: "https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Orange and Apple juice fresh and delicious",
      },
      {
        name: "OurSpace New Post",
        img: "https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "This is our new post from index.js",
      },
    ];
    localStorage.setItem("posts", JSON.stringify(samplePosts));
  }
}
function loadCardsListFromPostsController() {
  for (var i = 0, size = newPost.posts.length; i < size; i++) {
    const post = newPost.posts[i];
    addPostCard(post);
  }
}

loadStorageSampleData();
newPost.loadPostsFromLocalStorage();
loadCardsListFromPostsController();
