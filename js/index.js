import itemsController from "./itemsController.js";
import addPost from "./itemsController.js"
const controller = new itemsController();

controller.addPost(
    1,
    "Stressful Post",
    "2022-11-04",
    "Kamra Clemons",
    "https://images.pexels.com/photos/1018796/pexels-photo-1018796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "figuring this out has been difficult, but we got this!"
  );
  console.log(controller.content);
