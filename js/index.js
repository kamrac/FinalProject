import itemsController from "./itemsController.js";
import addPost from "./itemsController.js"
const postsController = new itemsController(0);

/* controller.addPost(
    1,
    "Stressful Post",
    "2022-11-04",
    "Kamra Clemons",
    "figuring this out has been difficult, but we got this!"
  );
  console.log(controller.posts); */


  function addPostCard(post){
    // DOM Elements from post.html
    const postContainer = document.getElementById("list-post");
    postContainer.innerHTML += postHTML;
    
    // Display title and author images and stuffs 
    for(let i = 0; i < post)
}
function loadStorageSampleData(){
  if(!localStorage.getItem("posts")){
      const samplePosts = [{'name':'kamra',
      'img':'https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'description':'Orange and Apple juice fresh and delicious'},
      {'name':'Ruffles Chicken',
      'img':"https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      'description':'This is our new post from index.js'}];
      localStorage.setItem("posts", JSON.stringify(samplePosts));
  }
}
function loadCardsListFromPostsController(){
  for(var i = 0, size = postsController.posts.length; i < size ; i++){
      const post = postsController.posts[i];
      addPostCard(post);
  }
}

loadStorageSampleData();
postsController.loadPostsFromLocalStorage();
loadCardsListFromPostsController();