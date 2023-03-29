import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userService";
import { removeUsers } from "./modules/removeUsers";
import { changePermissions } from "./modules/changePermissions";
import { editUser } from "./modules/editUser";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";

window.userService = new UserService;

userService.getUsers().then(data => {
    render(data);
});

addUsers();
removeUsers();
changePermissions();
editUser();
filterUsers();
sortUsers();