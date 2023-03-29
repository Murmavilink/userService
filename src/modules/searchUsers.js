import { render } from "./render";
import { debounce } from "./helpers";


export const searchUsers = () => {
    const serachInput = document.getElementById('search-input');

    const debounceSerach = debounce(() => {
        userService.getSearchUsers(serachInput.value).then(users => {
            render(users);
        });
    }, 500);


    serachInput.addEventListener('input', debounceSerach);
};